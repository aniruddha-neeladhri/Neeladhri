import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function PerkPage() {
  return <BrandPage brand={brandsData.perk} />;
}
