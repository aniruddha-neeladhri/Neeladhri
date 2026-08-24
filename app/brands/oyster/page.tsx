import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function OysterPage() {
  return <BrandPage brand={brandsData.oyster} />;
}
