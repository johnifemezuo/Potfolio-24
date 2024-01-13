"use client"


import { BigButton, HeroRoundedArt, PageContainer, SmallBorderButton } from "@/components";
import { WorkSidebar } from "./WorkSidabar";

export const WorkPageIndex = () => {
  return (
    <PageContainer>
      <div
        className="relative  mb-20 rounded-xl border border-[#312F2F] h-[70vh] py-20 md:py-14 md:p-8 px-3 lg:12 xl:px-20
      "
      >
        <div className="flex space-x-4">
          <h1 className="text-white  leading-tight w-[100px] xl:text-9xl">
            All Works
          </h1>
        </div>

        <div className="h-0.5 bg-white w-full my-4"></div>

        <div className="flex space-x-4 float-right relative">
          <h1 className="text-white  leading-tight xl:text-8xl">
            Designing <br /> The Future
          </h1>
        </div>

        <div className="flex absolute bottom-9 left-9 space-x-6">
          <BigButton title="All Work" active={true} onClick={() => {}} />
          <BigButton title="Design" active={false} onClick={() => {}} />
          <BigButton title="Webflow" active={false} onClick={() => {}} />
          <BigButton title="Development" active={false} onClick={() => {}} />
        </div>
      </div>

      <div className="flex ">
        <WorkSidebar />

        <div className="bg-blue-400 h-[2000px] w-full">projects</div>
      </div>
    </PageContainer>
  );
};
