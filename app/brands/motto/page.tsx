import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function MottoPage() {
  return <BrandPage brand={brandsData.motto} />;
}
