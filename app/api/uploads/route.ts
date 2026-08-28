import { NextResponse } from 'next/server';

import { parseUploadSection } from '@/lib/dto/upload.dto';
import { uploadFileToR2 } from "@/lib/services/uploads.service";
import { UploadSection } from '@/lib/enums/section.enum';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const file = form.get('file');
    const section = parseUploadSection(form.get('section'));

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: 'file is required (multipart field name: file)' },
        { status: 400 },
      );
    }

    if (!section) {
      return NextResponse.json(
        {
          error: 'Invalid or missing section',
          allowed: Object.values(UploadSection),
        },
        { status: 400 },
      );
    }

    const result = await uploadFileToR2(file, section);
    return NextResponse.json(result);
  } catch (e) {
    console.error('Upload error:', e);
    const message = e instanceof Error ? e.message : 'Upload failed';
    const isClient =
      message.includes('required') ||
      message.includes('Invalid') ||
      message.includes('large') ||
      message.includes('Missing required environment');
    return NextResponse.json(
      { error: message },
      { status: isClient ? 400 : 500 },
    );
  }
}
