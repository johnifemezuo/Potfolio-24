"use client";

import {
  BigButton,
  PageContainer,
} from "@/components";
import { WorkSidebar } from "./WorkSidabar";
import { WorkProjectCard } from "./WorkProjectCard";

export const WorkPageIndex = () => {
  return (
    <PageContainer>
      <div
        className="relative mb-12 md:mb-20 rounded-xl border border-[#312F2F] h-[50vh] md:h-[60vh] py-12 m md:py-14 md:p-8 px-3 lg:12 xl:px-20
      "
      >
        <div className="flex space-x-4">
          <h1 className="text-white  leading-tight w-[100px] xl:text-9xl text-4xl">
            All Works
          </h1>
        </div>

        <div className="h-0.5 bg-white w-full my-4"></div>

        <div className="flex space-x-4 float-right relative">
          <h1 className="text-white  leading-tight xl:text-8xl text-4xl">
            Designing <br /> The Future
          </h1>
        </div>

        <div className="flex absolute bottom-0 md:bottom-9 left-0 px-4 py-4 flex-wrap md:flex-nowrap gap-3  md:left-9 s">
          <BigButton title="All Work" active={true} onClick={() => {}} />
          <BigButton title="Design" active={false} onClick={() => {}} />
          <BigButton title="Webflow" active={false} onClick={() => {}} />
          <BigButton title="Development" active={false} onClick={() => {}} />
        </div>
      </div>

      <div className="flex mb-32">
        <WorkSidebar />

        <div className=" h-auto w-full grid md:grid-cols-2 gap-5 md:gap-12">
          <WorkProjectCard link="work/rendlr" />
          <WorkProjectCard link="work/rendlr" />
        </div>
      </div>
    </PageContainer>
  );
};
