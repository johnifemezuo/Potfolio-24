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

export const HomepageIndex = ({projects,dribbleShots}:any) => {
  
  return (
    <Layout>
      <HeroSection />
      <ExceptOne />
      {/* <WorkSection /> */}
      <SelectedWorks selectedWork={projects?.slice(0, 3)} />
      {/* <Reviews /> */}
      <PageContainer>
        <ExceptTwo />
      </PageContainer>
      <Playground dribbleShots={dribbleShots} />
      <div className="py-12" />
    </Layout>
  );
};
