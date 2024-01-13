import {
  ExceptTwo,
  FullWidthButton,
  PageContainer,
  PlayGroundDesigns,
} from "@/components";
import Image from "next/image";

export const Playground = () => {
  return (
    <div>
      <PageContainer>
        <ExceptTwo />
        <FullWidthButton name="Playground" />
      </PageContainer>

      <div className=" overflow-x-hidden  lg:py-20 py-8 md:space-y-12 space-y-12">
        <div className="w-[1000px] overflow-x-auto lg:w-full flex lg:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          <PlayGroundDesigns img="/images/webs.webp" />
          <PlayGroundDesigns img="/images/website.webp" />
          <PlayGroundDesigns img="/images/webss.jpg" />
          <PlayGroundDesigns img="/images/website.webp" />
        </div>
        <div className="w-[1000px] overflow-x-auto lg:w-full flex lg:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 ">
          <PlayGroundDesigns img="/images/webs.webp" />
          <PlayGroundDesigns img="/images/website.webp" />
          <PlayGroundDesigns img="/images/webss.jpg" />
          <PlayGroundDesigns img="/images/website.webp" />
        </div>
      </div>

     
    </div>
  );
};
