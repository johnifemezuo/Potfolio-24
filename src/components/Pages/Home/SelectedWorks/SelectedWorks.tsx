"use client";

import {
  ArrowDownIcon,
  ArrowRight,
  PageContainer,
  ProjectCard,
  WorkProjectCard,
} from "@/components";
import { projects } from "@/contents";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const SelectedWorks = () => {
  const ref = useRef(null);
  const refTwo = useRef(null);

  const isInView = useInView(ref, { once: true });
  const cardInView = useInView(refTwo, { once: true });

  const easeInVariant = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const easeCardVariant = {
    hideCards: { x: 160, opacity: 0 },
    showCards: { x: 0, opacity: 1 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (cardInView) {
      mainControls.start("showCards");
    }
  }, [cardInView]);

  return (
    <div className="bg-[#110D0D] w-full pt-12 md:pt-20 xl:pt-44">
      <div className="pb-6 md:pb-20">
        <PageContainer>
          <div
            ref={ref}
            className="lg:space-y-20 space-y-6 px-4 py-8 xl:px-20 lg:py-20 border border-border-color rounded-xl"
          >
            <ArrowRight className="text-white items-center  rotate-90 w-8 h-12 xl:w-20 xl:h-20 md:w-14 md:h-14" />

            <div className=" lg:flex--between space-y-5 lg:space-y-0">
              <motion.h1
                variants={easeInVariant}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-semibold md:max-w-xl text-3xl lg:text-6xl xl:text-8xl  text-stone-100"
              >
                Selected Works
              </motion.h1>

              <motion.p
                variants={easeInVariant}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="font-extralight text-sm lg:w-[400px] 2xl:w-[500px] sm:text-lg  md:text-lg lg:text-2xl leading-snug text-zinc-100 lg:font-medium"
              >
                I have worked on lots of projects, I both Design and Front end
                development and I have got the receipts to prove it in my
                portfolio of case studies.
              </motion.p>
            </div>
          </div>
        </PageContainer>
      </div>

      <div className="overflow-x-scroll bg-white w-full  ">
        <div className="lg:flex lg:w-340%] ">
          {projects?.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              img={project.image}
              desc={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}

          {/* <PageContainer>
            <div className=" h-auto w-full grid md:grid-cols-2 gap-5 md:gap-12 bg-transparent">
              {projects.map((project, ind) => (
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
          </PageContainer> */}

          <Link href="/work">
            <div className="lg:w-[600px] relative py-12 lg:py-0 bg-white  grid lg:h-screen place-content-center ">
              <div className="grid justify-items-center space-y-4 lg:space-y-8">
                <h1 className="text-xl md:text-3xl font-medium lg:text-[3rem] text-zinc-900">
                  Wait there is more?
                </h1>

                <button className="flex--items space-x-3 text-zinc-600 hover:text-zinc-700">
                  <p className="sm:text-xl ">View showcase</p>
                  <ArrowDownIcon className="-rotate-45 h-4 w-4 lg:w-7 lg:h-7" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
