import type { Metadata } from "next";
import LegalBanner from "@/components/Legal/LegalBanner";
import LegalPageContent from "@/components/Legal/LegalPageContent";
import { TERMS_AND_CONDITIONS } from "@/lib/constants/legal";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.terms, "/terms");

export default function TermsPage() {
  return (
    <>
      <LegalBanner title={TERMS_AND_CONDITIONS.title} />
      <LegalPageContent content={TERMS_AND_CONDITIONS} />
    </>
  );
}
