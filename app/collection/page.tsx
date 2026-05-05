import AlliedAccessories from "@/components/collections/alliedAccessories";
import Bathroom from "@/components/collections/bathroom";
import CollectionsSection from "@/components/collections/CollectionsSection";
import Dining from "@/components/collections/dining";
import Kitchen from "@/components/collections/kitchen";
import LivingRoom from "@/components/collections/livingroom";

export default function CollectionsPage() {
  return (
    <>
      <CollectionsSection />
      <section id="living-room">
        <LivingRoom />
      </section>
      <section id="bathroom">
        <Bathroom />
      </section>
      <section id="dining">
        <Dining />
      </section>
      <section id="kitchen">
        <Kitchen />
      </section>
      <section id="allied-accessories">
        <AlliedAccessories />
      </section>
    </>
  );
}
