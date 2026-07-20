import BrandPage from "@/components/Brands/BrandPage";
import { brandsData } from "@/lib/constants/brands";

export default function Insinkerator() {
  return <BrandPage brand={brandsData["insinkerator"]} />;
}
