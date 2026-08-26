import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function AoSmithPage() {
  return <BrandPage brand={brandsData["ao-smith"]} />;
}
