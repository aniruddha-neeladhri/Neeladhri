/**
 * Convert R2 PNGs → WebP (resized), upload alongside, print URL map.
 *
 * Usage:
 *   npx tsx --env-file=.env scripts/r2-convert-webp.ts
 */
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { createWriteStream, promises as fs } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { pipeline } from "stream/promises";
import { Readable } from "stream";
import sharp from "sharp";
import { getR2Client } from "../lib/config/r2.config";

const BASE = process.env.R2_PUBLIC_URL?.replace(/\/$/, "") ?? "";
const CACHE = "public, max-age=31536000, immutable";

/** Remaining homepage space + luxury brand PNGs (batch 2). */
const TARGETS: { url: string; maxWidth: number; quality: number }[] = [
  "37adebae-6b2d-429e-86e1-28784de68b26",
  "5d6eb298-1312-4bea-bc20-46f2907b081b",
  "b55e70a1-8665-4a49-b82d-48033e4f9ff7",
  "50066262-bd97-4490-8aac-0923bb096da2",
  "31590498-a3c6-4cdc-942a-3c4ad5d7872d",
  "ed1d1d93-dfc4-4f5d-941c-4d69ae722c1a",
  "6231c6b9-1a0d-434f-a202-e9002836eb42",
  "3764f462-0d1e-41d1-b483-6a74cf177ff8",
  "1dcf1ed2-664e-4ab7-b0fe-31bb1b5dbe4e",
  "8c161462-837a-4302-a466-ea871a506fb7",
  "40353567-2fe6-403d-a93c-8b4cd14e6be8",
  "d5f6b1af-fb98-4cbd-a971-45a5bb0cf5fc",
  "afebd55a-1ff3-4fba-ac0b-8238dacb03fb",
  "90ad9922-d431-4963-91a6-cf12c346e876",
  "a0b3c238-26e9-445d-b9ac-a70c628e580e",
  "dcec07a2-cc09-49e2-88f7-3255de3916cb",
  "abaca6df-2204-433c-8ed9-3415e3b4cfe6",
  "098b4f95-24eb-438b-820f-9fe8e7e3f44d",
  "2ac24b35-dc65-4330-b7eb-a92824d3e275",
  "8f34aa2e-5a7a-45b4-8797-dd6b944d3e2e",
  "09487338-d027-4997-966c-6ae00526e906",
  "37d84dc3-ea2e-4499-950c-4be4b7c99d61",
  "eba4ad80-18a0-4dbd-95bb-a8b5c4024c20",
  "59f06f1b-ec84-40a7-b2ab-92d61571b7ef",
].map((id) => ({
  url: `${BASE}/home/${id}.png`,
  maxWidth: 900,
  quality: 75,
}));

async function download(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok || !res.body) throw new Error(`Download failed ${url}: ${res.status}`);
  await pipeline(Readable.fromWeb(res.body as never), createWriteStream(dest));
}

async function convertOne(url: string, maxWidth: number, quality: number) {
  const bucket = process.env.R2_BUCKET_NAME!;
  const keyPng = url.replace(`${BASE}/`, "");
  const keyWebp = keyPng.replace(/\.png$/i, ".webp");
  const tmpIn = join(tmpdir(), `r2-${Date.now()}-${Math.random()}.png`);
  const tmpOut = tmpIn.replace(/\.png$/, ".webp");

  await download(url, tmpIn);
  const input = await fs.readFile(tmpIn);
  const output = await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toBuffer();

  await fs.writeFile(tmpOut, output);
  await getR2Client().send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: keyWebp,
      Body: output,
      ContentType: "image/webp",
      CacheControl: CACHE,
    })
  );

  const newUrl = `${BASE}/${keyWebp}`;
  console.log(
    `${(input.length / 1024).toFixed(0)} KiB → ${(output.length / 1024).toFixed(0)} KiB  ${keyPng} → ${keyWebp}`
  );

  await fs.unlink(tmpIn).catch(() => {});
  await fs.unlink(tmpOut).catch(() => {});
  return { from: url, to: newUrl };
}

async function main() {
  if (!BASE || !process.env.R2_BUCKET_NAME) {
    throw new Error("R2_PUBLIC_URL and R2_BUCKET_NAME required");
  }

  const map: Record<string, string> = {};
  for (const t of TARGETS) {
    try {
      const { from, to } = await convertOne(t.url, t.maxWidth, t.quality);
      map[from] = to;
    } catch (err) {
      console.error(`FAILED ${t.url}`, err);
    }
  }

  console.log("\nURL_MAP_JSON");
  console.log(JSON.stringify(map, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
