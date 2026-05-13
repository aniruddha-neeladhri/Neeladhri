import { PutObjectCommand } from '@aws-sdk/client-s3';

import { getR2Client } from '@/lib/config/r2.config';
import { UPLOAD_MAX_BYTES, UPLOAD_MAX_MB } from '@/lib/constants/upload-limits';
import type { UploadSection } from '@/lib/enums/section.enum';
import { v4 as uuid } from 'uuid';

export async function uploadFileToR2(
  file: File,
  section: UploadSection,
): Promise<{
  success: true;
  url: string;
  key: string;
  section: UploadSection;
}> {
  if (!file.size) {
    throw new Error('File is required');
  }
  if (file.size > UPLOAD_MAX_BYTES) {
    throw new Error(`File too large (max ${UPLOAD_MAX_MB}MB)`);
  }

  const bucket = process.env.R2_BUCKET_NAME;
  if (!bucket) {
    throw new Error('Missing required environment variable: R2_BUCKET_NAME');
  }

  const extension = file.name.includes('.')
    ? file.name.split('.').pop()
    : undefined;
  const safeExt = extension?.replace(/[^\w.-]/g, '') || 'bin';
  const fileName = `${section}/${uuid()}.${safeExt}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  await getR2Client().send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: fileName,
      Body: buffer,
      ContentType: file.type || 'application/octet-stream',
    }),
  );

  const base = process.env.R2_PUBLIC_URL?.replace(/\/$/, '') ?? '';
  return {
    success: true,
    url: `${base}/${fileName}`,
    key: fileName,
    section,
  };
}
