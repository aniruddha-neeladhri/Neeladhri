import type { Metadata } from "next";
import LegalBanner from "@/components/Legal/LegalBanner";
import LegalPageContent from "@/components/Legal/LegalPageContent";
import { PRIVACY_POLICY } from "@/lib/constants/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Neeladhri Ceramics",
  description:
    "Learn how Neeladhri Ceramics collects, uses, stores, and protects your personal information when you visit or interact with our website.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <LegalBanner title={PRIVACY_POLICY.title} />
      <LegalPageContent content={PRIVACY_POLICY} />
    </>
  );
}
