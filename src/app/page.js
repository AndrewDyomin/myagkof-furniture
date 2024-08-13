
import Hero from "./components/hero";
import ToCatalogBtns from "./components/toCatalogBtns";
import Bestsellers from "./components/bestsellers";
import InfoSection from "./components/infoSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ToCatalogBtns />
      <Bestsellers />
      <InfoSection />
    </main>
  );
}
