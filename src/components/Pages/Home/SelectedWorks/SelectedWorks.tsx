"use client";

import {
  ArrowDownIcon,
  ArrowRight,
  PageContainer,
  ProjectCard,
  ScrollReveal,
  WorkProjectCard,
} from "@/components";
import { projects } from "@/contents";
import Link from "next/link";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { PROJECT_QUERY } from "../../../../../base/query/project";


export const SelectedWorks = ({selectedWork}:any) => {


  const ref = useRef(null);
  const refTwo = useRef(null);

  const isInView = useInView(ref, { once: true });
  const cardInView = useInView(refTwo, { once: true });

  const easeInVariant = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const easeCardVariant = {
    hideCards: { y: 160, opacity: 0 },
    showCards: { y: 0, opacity: 1 },
  };

  const buttonVariant = {
    hover: {
      scale: 1.1,
      yoyo: Infinity,
      transition: { duration: 0.6, type: "spring", when: "beforeChildren" },
    },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);



  return (
    <div className="bg-[#110D0D] w-full pt-12 md:py-20 xl:py-32">
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
                className="font-semibold md:max-w-sm xl:max-w-xl text-3xl lg:text-6xl xl:text-8xl  text-stone-100"
              >
                Selected Works
              </motion.h1>

              <motion.p
                variants={easeInVariant}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="font-light text-sm lg:w-[400px] 2xl:w-[500px] sm:text-lg  md:text-lg lg:text-2xl leading-snug text-zinc-100 lg:font-medium"
              >
                I have worked on lots of projects, I both Design and develop products and I have got the receipts to prove it in my
                portfolio of case studies.
              </motion.p>
            </div>
          </div>
        </PageContainer>
      </div>

      <ScrollReveal className="w-full  ">
        <div className="">
          <div className="">
            <PageContainer>
              <motion.div
                ref={refTwo}
                variants={easeCardVariant}
                initial="hidden"
                animate={mainControls}
                className=" h-auto w-full grid xl:grid-cols-2 gap-5 md:gap-9 lg:gap-12 bg-transparent"
              >
                {selectedWork?.map(({description,slug, projectTitle, introImage}: any, ind: any) => (
                  <WorkProjectCard
                    key={ind}
                    link={slug}
                    title={projectTitle}
                    description={description}
                    image={introImage?.url}
                    tags={["design"]}
                  />
                ))}
              </motion.div>

              <div className="py-7 md:py-12 ">
                <Link href="/work">
                  <motion.button
                    whileHover="hover"
                    variants={buttonVariant}
                    className="w-[250px] mx-auto block md:text-lg font-medium px-5 py-3 bg-accent-colorTwo text-zinc-800 rounded-full "
                  >
                    See All Work
                  </motion.button>
                </Link>
              </div>
            </PageContainer>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
