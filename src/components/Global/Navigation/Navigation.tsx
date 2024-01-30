import { useRouter } from "next/navigation";
import { Logo, Navbar, PageContainer, SiteTime } from "..";

export const Navigation = () => {
  const {push} = useRouter()
  return (
    <div className="w-full bg-background-bg py-4">
      <PageContainer>
        <div className=" flex items-center justify-between text-white">
          <Logo />
          <div className="hidden md:block">
            <SiteTime />
          </div>

          <div className="flex--items space-x-8">
            <button onClick={() => push("#contact")} className="w-full px-5 py-3 bg-accent-colorTwo text-zinc-800 rounded-full hidden md:block">Get in touch</button>
            <Navbar />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};
