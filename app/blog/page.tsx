import BlogsSection from "@/components/Sections/Blog/BlogsSection";
import ContemporaryLiving from "@/components/Sections/Blog/ContemporaryLiving";
import LuxurySpace from "@/components/Sections/Blog/luxuryspace";
import LuxuryDiscover from "@/components/Sections/Blog/luxurydiscover";

export default function BlogPage() {
  return (
    <>
      <BlogsSection />
      <LuxurySpace />
      <LuxuryDiscover />
      <ContemporaryLiving />
    </>
  );
}