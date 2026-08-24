import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function EgoPage() {
  return <BrandPage brand={brandsData.ego} />;
}
