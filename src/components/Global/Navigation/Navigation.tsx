import { Logo, Navbar, PageContainer, SiteTime } from "..";

export const Navigation = () => {
  return (
    <div className="w-full bg-background-bg py-4">
      <PageContainer>
        <div className=" flex items-center justify-between text-white">
          <Logo />
          <div className="hidden md:block">
            <SiteTime />
          </div>
          <Navbar />
        </div>
      </PageContainer>
    </div>
  );
};
