"use client";

import { BigButton, PageContainer } from "@/components";
import { WorkSidebar } from "./WorkSidabar";
import { WorkProjectCard } from "./WorkProjectCard";
import { IProject, projects } from "@/contents";
import { useState } from "react";

export const WorkPageIndex = () => {
  const [filteredData, setFilteredData] = useState<IProject[]>(projects);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedName, setSelectedName] = useState("");

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredData(projects);

    } else {
      setFilteredData(
        projects.filter((project) => project.category === category)
      );
    }
  };

  const filterProjectByName = (name: string) => {
    setSelectedName(name);
    setFilteredData(
      projects.filter((project) => project.title.includes(name))
    );
  };
  

  return (
    <PageContainer>
      <div
        className="relative mb-12 md:mb-20 rounded-xl border border-[#312F2F] h-[50vh] md:h-[68vh] py-12 m md:py-14 md:p-8 px-3 lg:12 xl:px-12"
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

        <div className="flex absolute bottom-0 md:bottom-6 left-0 px-4 py-4 flex-wrap md:flex-nowrap gap-3  md:left-5">
          <BigButton
            title="All Work"
            active={selectedCategory === "all"}
            onClick={() => filterByCategory("all")}
          />
          <BigButton
            title="Design"
            active={selectedCategory === "design"}
            onClick={() => filterByCategory("design")}
          />
          <BigButton
            title="Webflow"
            active={selectedCategory === "webflow"}
            onClick={() => filterByCategory("webflow")}
          />
          <BigButton
            title="Development"
            active={selectedCategory === "development"}
            onClick={() => filterByCategory("development")}
          />
        </div>
      </div>

      <div className="flex mb-32">
        {selectedCategory === "all" ? (
          <WorkSidebar
            projects={projects}
            handleNameSelect={filterProjectByName}
            selectedName={selectedName}
          />
        ) : null}

        <div className=" h-auto w-full grid md:grid-cols-2 gap-5 md:gap-12">
          {filteredData.map((project, ind) => (
            <WorkProjectCard
              key={ind}
              link={project.link}
              title={project.title}
              description={project.description}
              image={project.image2}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
