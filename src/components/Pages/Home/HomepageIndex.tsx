import {
  ExceptOne,
  HeroSection,
  Layout,
  Playground,
  SelectedWorks,
  WorkSection,
} from "@/components";

export const HomepageIndex = () => {
  return (
    <Layout>
      <HeroSection />
      <ExceptOne />
      <WorkSection />
      <SelectedWorks />
      {/* <Reviews /> */}
      <Playground />
    </Layout>
  );
};
