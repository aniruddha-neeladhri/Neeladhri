/**
 * Backfill Cache-Control on existing R2 objects (public bucket media).
 * New uploads already set this in uploads.service.ts.
 *
 * Usage: npx tsx --env-file=.env scripts/r2-set-cache-control.ts
 * Optional prefix: npx tsx --env-file=.env scripts/r2-set-cache-control.ts home/
 */
import {
  CopyObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getR2Client } from "../lib/config/r2.config";

const CACHE =
  process.env.R2_CACHE_CONTROL ?? "public, max-age=31536000, immutable";
const prefix = process.argv[2] ?? "";

async function main() {
  console.log("Starting R2 cache backfill…", { prefix: prefix || "(all)" });
  const bucket = process.env.R2_BUCKET_NAME;
  if (!bucket) throw new Error("R2_BUCKET_NAME is required");

  const client = getR2Client();
  let continuationToken: string | undefined;
  let updated = 0;
  let skipped = 0;

  do {
    const listed = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: prefix || undefined,
        ContinuationToken: continuationToken,
      })
    );

    const keys = (listed.Contents ?? [])
      .map((o) => o.Key)
      .filter((k): k is string => Boolean(k) && !k.endsWith("/"));

    console.log(`Listed ${keys.length} keys…`);

    for (const key of keys) {
      const head = await client.send(
        new HeadObjectCommand({ Bucket: bucket, Key: key })
      );

      if (head.CacheControl?.includes("max-age=31536000")) {
        skipped += 1;
        continue;
      }

      // R2 CopySource must be URL-encoded when keys have special chars.
      const copySource = encodeURIComponent(`${bucket}/${key}`).replace(
        /%2F/g,
        "/"
      );

      await client.send(
        new CopyObjectCommand({
          Bucket: bucket,
          Key: key,
          CopySource: copySource,
          MetadataDirective: "REPLACE",
          CacheControl: CACHE,
          ContentType: head.ContentType ?? "application/octet-stream",
          Metadata: head.Metadata,
        })
      );
      updated += 1;
      console.log(`updated: ${key}`);
    }

    continuationToken = listed.IsTruncated
      ? listed.NextContinuationToken
      : undefined;
  } while (continuationToken);

  console.log(`Done. updated=${updated} skipped=${skipped}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
