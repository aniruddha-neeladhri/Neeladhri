import type { Metadata } from "next";
import ContactBanner from "@/components/Sections/ContactBanner";
import ContactSection from "@/components/Sections/ContactSection";
import { PAGE_SEO, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(PAGE_SEO.contact, "/contact");

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">{PAGE_SEO.contact.h1}</h1>
      <ContactBanner />
      <ContactSection />
    </>
  );
}
