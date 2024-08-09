import Image from "next/image";
import Header from "./components/header";
import clsx from 'clsx'
import Hero from "./components/hero";
import ToCatalogBtns from "./components/toCatalogBtns";
import Bestsellers from "./components/bestsellers";
import InfoSection from "./components/infoSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className={clsx('w-full px-10')}>
      <Header />
      <Hero />
      <ToCatalogBtns />
      <Bestsellers />
      <InfoSection />
      <Footer />
    </main>
  );
}
