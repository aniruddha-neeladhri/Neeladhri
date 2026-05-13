import { UPLOAD_MAX_MB } from '@/lib/constants/upload-limits';
import { UploadSection } from '@/lib/enums/section.enum';

/** OpenAPI 3 document for Swagger UI (`/docs`) and tooling. */
export function getOpenApiDocument(): Record<string, unknown> {
  const sectionEnum = Object.values(UploadSection);

  return {
    openapi: '3.0.3',
    info: {
      title: 'Neeladhri API',
      version: '1.0.0',
      description:
        `REST API for Neeladhri. Uploads store files on Cloudflare R2 and return a public CDN URL. Uploads accept images, video, audio (e.g. MP3), documents, and other binaries up to ${UPLOAD_MAX_MB} MB per file.`,
    },
    servers: [{ url: '/', description: 'Same origin (Next.js)' }],
    tags: [{ name: 'Uploads', description: 'R2-backed file uploads' }],
    paths: {
      '/api/uploads': {
        post: {
          tags: ['Uploads'],
          summary: 'Upload a file to R2',
          description:
            `Multipart form: \`file\` (binary) and \`section\` (enum). Any common type is allowed (images, video, MP3/audio, etc.). Max **${UPLOAD_MAX_MB} MB** per file. Response includes the public \`url\` on your R2 dev domain or custom CDN.`,
          requestBody: {
            required: true,
            content: {
              'multipart/form-data': {
                schema: {
                  type: 'object',
                  required: ['file', 'section'],
                  properties: {
                    file: {
                      type: 'string',
                      format: 'binary',
                      description: `Any file: images, video, audio (MP3, etc.), archives, documents. Max ${UPLOAD_MAX_MB} MB.`,
                    },
                    section: {
                      type: 'string',
                      enum: sectionEnum,
                      description: 'Site section / folder prefix in the bucket',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'File stored on R2',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      success: { type: 'boolean', example: true },
                      url: {
                        type: 'string',
                        description: 'Public URL (R2_PUBLIC_URL + key)',
                      },
                      key: { type: 'string', description: 'Object key in bucket' },
                      section: {
                        type: 'string',
                        enum: sectionEnum,
                      },
                    },
                  },
                },
              },
            },
            '400': {
              description: 'Missing file, invalid section, or file too large',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: { type: 'string' },
                    },
                  },
                },
              },
            },
            '500': {
              description: 'Server or storage error',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: { type: 'string' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
}
