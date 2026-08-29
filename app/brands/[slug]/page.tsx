import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";
import { brandIdFromSlug, getAllBrandSlugs } from "@/lib/data/brands";
import { getBrandSeo, pageMetadata } from "@/lib/seo";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brandId = brandIdFromSlug(slug);
  const brand = brandId ? brandsData[brandId] : undefined;
  const seo = getBrandSeo(slug);

  if (!brand && !seo) {
    return { title: "Brand | Neeladhri Ceramics" };
  }

  return pageMetadata(
    {
      title: seo?.title ?? `${brand?.name} | Neeladhri Ceramics`,
      description: seo?.description ?? brand?.tagline ?? "",
      h1: seo?.h1 ?? brand?.name ?? "",
    },
    `/brands/${slug}`,
  );
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brandId = brandIdFromSlug(slug);
  const seo = getBrandSeo(slug);

  if (!brandId) {
    notFound();
  }

  return <BrandPage brandId={brandId} pageHeading={seo?.h1} />;
}
