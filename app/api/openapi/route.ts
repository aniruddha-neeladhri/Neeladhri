import { NextResponse } from 'next/server';

import { getOpenApiDocument } from '@/lib/swagger/openapi-spec';

export async function GET() {
  return NextResponse.json(getOpenApiDocument());
}
