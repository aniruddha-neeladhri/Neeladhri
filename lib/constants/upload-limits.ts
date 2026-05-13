/** Max upload size enforced by `/api/uploads` (must match infra/proxy limits where deployed). */
export const UPLOAD_MAX_MB = 500;
export const UPLOAD_MAX_BYTES = UPLOAD_MAX_MB * 1024 * 1024;
