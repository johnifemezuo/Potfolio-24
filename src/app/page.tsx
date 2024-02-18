import {
  ExceptOne,
  ExceptTwo,
  HeroSection,
  Layout,
  Playground,
  SelectedWorks,
  WorkSection,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Ifemezuo | Portfolio</title>
      </Head>

      <Layout>
        <HeroSection />
        <ExceptOne />
        <WorkSection />
        <SelectedWorks />{/* <Reviews /> */}
        <Playground />
      </Layout>
    </>
  );
}
