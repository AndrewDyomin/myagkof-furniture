import Image from "next/image";
import Header from "./components/header";
import clsx from 'clsx'
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className={clsx('w-full px-2.5')}>
      <Header />
      <Hero />
    </main>
  );
}
