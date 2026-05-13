import { S3Client } from '@aws-sdk/client-s3';

let client: S3Client | null = null;

/** Cloudflare R2 (S3-compatible). Lazily created on first upload so `next build` works without R2 env in CI. */
export function getR2Client(): S3Client {
  if (!client) {
    const endpoint = process.env.R2_ENDPOINT;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    if (!endpoint || !accessKeyId || !secretAccessKey) {
      throw new Error(
        'Missing R2 configuration: set R2_ENDPOINT, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY',
      );
    }
    client = new S3Client({
      region: 'auto',
      endpoint,
      credentials: { accessKeyId, secretAccessKey },
      forcePathStyle: true,
    });
  }
  return client;
}
