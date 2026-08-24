import type { Metadata } from "next";
import LegalBanner from "@/components/Legal/LegalBanner";
import LegalPageContent from "@/components/Legal/LegalPageContent";
import { TERMS_AND_CONDITIONS } from "@/lib/constants/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions | Neeladhri Ceramics",
  description:
    "Read the Terms and Conditions governing your access to and use of the Neeladhri Ceramics website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <LegalBanner title={TERMS_AND_CONDITIONS.title} />
      <LegalPageContent content={TERMS_AND_CONDITIONS} />
    </>
  );
}
