import type { Metadata } from "next";
import LegalBanner from "@/components/Legal/LegalBanner";
import LegalPageContent from "@/components/Legal/LegalPageContent";
import { PRIVACY_POLICY } from "@/lib/constants/legal";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.privacy, "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <LegalBanner title={PRIVACY_POLICY.title} />
      <LegalPageContent content={PRIVACY_POLICY} />
    </>
  );
}
