"use client";

import { BigButton, PageContainer, Playground, ScrollReveal } from "@/components";
import { WorkSidebar } from "./WorkSidabar";
import { WorkProjectCard } from "./WorkProjectCard";
import { IProject, projects } from "@/contents";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Global/Animation/Reveal";

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
    setFilteredData(projects.filter((project) => project.title.includes(name)));
  };

  return (
    <PageContainer>
      <div className="relative mb-12 md:mb-8 rounded-xl border border-[#312F2F] h-[53vh] md:h-[68vh] py-12 m md:py-14 md:p-8 px-3 lg:12 xl:px-12">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="flex space-x-4"
        >
          <h1 className="text-white  leading-tight w-[100px] md:text-6xl xl:text-9xl text-4xl">
            All Works
          </h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="h-0.5 bg-white w-full my-4"
        ></motion.div>

        <Reveal delay={0.4} duration={0.8}>
          <div className="flex space-x-4 float-right relative">
            <h1 className="text-white md:text-6xl leading-tight xl:text-8xl text-4xl">
              Designing <br /> The Future
            </h1>
          </div>
        </Reveal>

      </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="flex sticky mb-6 top-20 bg-[var(--background-bg)] z-40 py-4 flex-wrap md:flex-nowrap gap-3  "
        >
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
          {/* <BigButton
            title="Framer"
            active={selectedCategory === "framer"}
            onClick={() => filterByCategory("framer")}
          /> */}
          <BigButton
            title="Development"
            active={selectedCategory === "development"}
            onClick={() => filterByCategory("development")}
          />
        </motion.div>

      <ScrollReveal>
        <div className="flex mb-32">
          {selectedCategory === "all" ? (
            <WorkSidebar
              projects={projects}
              handleNameSelect={filterProjectByName}
              selectedName={selectedName}
            />
          ) : null}

          {filteredData?.length > 0 ? (
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
          ) : (
            <div className="inline-block py-12 md:py-20 text-zinc-200 md:text-3xl text-lg text-center border rounded-xl w-full border-zinc-700">
              Coming Soon...
            </div>
          )}
        </div>
      </ScrollReveal>

<Playground />

    </PageContainer>
  );
};
