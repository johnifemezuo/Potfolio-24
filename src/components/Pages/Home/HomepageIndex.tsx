import {
  ExceptOne,
  ExceptTwo,
  HeroSection,
  Layout,
  PageContainer,
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
      {/* <Playground /> */}
      <PageContainer>
        <ExceptTwo />
      </PageContainer>
      <div className="py-12" />
    </Layout>
  );
};
