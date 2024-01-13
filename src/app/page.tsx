import {
  ExceptOne,
  ExceptTwo,
  HeroSection,
  Playground,
  SelectedWorks,
  WorkSection,
} from "@/components";
import { Reviews } from "@/components/Pages/Home/Reviews";
import Head from "next/head";

export default function Home() {
  <Head>
    <title>John Ifemezuo | Portfolio</title>
  </Head>

  return (
    <main>
      <HeroSection />
      <ExceptOne />
      <WorkSection />
      <SelectedWorks />+
      <Reviews />
      <Playground />
    </main>
  );
}
