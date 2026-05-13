import { UploadSection } from '@/lib/enums/section.enum';

export type { UploadSection };

const SECTION_VALUES = new Set<string>(
  Object.values(UploadSection),
);

export function parseUploadSection(
  raw: FormDataEntryValue | null,
): UploadSection | null {
  if (typeof raw !== 'string') return null;
  return SECTION_VALUES.has(raw) ? (raw as UploadSection) : null;
}
