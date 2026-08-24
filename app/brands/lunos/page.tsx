import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function LunosPage() {
  return <BrandPage brand={brandsData.lunos} />;
}
