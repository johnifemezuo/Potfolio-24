import { ExceptTwo, FullWidthButton, PageContainer, PlayGroundDesigns } from "@/components";
import Image from "next/image";

export const Playground = () => {
    return (
      <PageContainer>
        <ExceptTwo />
        <div className=" overflow-x-hidden  lg:pb-20 pb-5">
          <div className="w-[1000px] overflow-x-auto lg:w-full flex lg:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
            <PlayGroundDesigns img="/images/me.png" />
            <PlayGroundDesigns img="/images/me.png" />
            <PlayGroundDesigns img="/images/me.png" />
            <PlayGroundDesigns img="/images/me.png" />
          </div>
        </div>

        <FullWidthButton name="Playground" />
      </PageContainer>
    );
}