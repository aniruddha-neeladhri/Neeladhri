import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";
import { brandIdFromSlug, getAllBrandSlugs } from "@/lib/data/brands";

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

  if (!brand) {
    return { title: "Brand | Neeladhri Ceramics" };
  }

  return {
    title: `${brand.name} | Neeladhri Ceramics`,
    description: brand.tagline,
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brandId = brandIdFromSlug(slug);

  if (!brandId) {
    notFound();
  }

  return <BrandPage brandId={brandId} />;
}
