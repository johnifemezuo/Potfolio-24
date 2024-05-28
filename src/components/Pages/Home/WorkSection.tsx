"use client";

import { ArrowRight, PageContainer } from "@/components";
import { WorkType } from "./WorkType";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const WorkSection = () => {
  const ref = useRef(null);
  const refTwo = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardInView = useInView(refTwo, { once: true });

  const easeInVariant = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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

  const btnStyle =
    "border uppercase border-stone-300 text-xs lg:text-base 2xl:text-lg rounded-full px-4 py-2 md:px-6 md:py-3 text-stone-300 lg:text-base inline-block text-center font-medium";

  return (
    <div className="lg:pb-20 overflow-x-hidden">
      <PageContainer>
        <motion.div
          variants={easeInVariant}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.3 }}
          ref={ref}
          className="space-y-6 xl:space-y-0 justify-between px-4 md:py-8 md:px-6 2xl:px-20 py-4 xl:px-12 xl:py-12 2xl:py-20 border border-border-color rounded-xl xl:flex items-center"
        >
          <h1 className="text-2xl  md:text-5xl 2xl:text-[5rem] xl:text-[3rem] font-light text-white">
            What i do best
          </h1>

          <div className="xl:grid flex flex-wrap grid-cols-3 gap-3 lg:gap-5">
            <span className={btnStyle}>Mobile app design</span>
            <span className={btnStyle}>Website Design</span>
            <span className={btnStyle}>Front end development</span>
            <span className={btnStyle}>No-code Development</span>
          </div>
        </motion.div>
      </PageContainer>

      <div ref={refTwo} className="w-full pb-12 xl:pb-20 ">
        <motion.div
          variants={easeCardVariant}
          initial="hideCards"
          animate={mainControls}
          transition={{
            duration: 1.1,
            delay: 0.2,
            staggerChildren: 1,
            ease: "easeInOut",
            bounce: 0.8,
          }}
          className="grid no-scrollbar w-full mt-14 xl:mt-44 gap-5 md:gap-0 md:space-y-7 px-3 xl:px-12"
        >
          <div className="md:flex md:justify-start  space-x-5">
            <ArrowRight className=" w-[35px] md:w-[40px] md:h-[40px] lg:h-[54px] lg:w-[150px]  lg:-ml-10 text-white rotate-90 mt-5" />
            <h1 className="md:w-[200px] text-white lg:text-5xl md:text-3xl text-3xl xl:w-[300px]">
              How Can I Assist You
            </h1>
          </div>

          {/* card 1 */}
          <div className="grid xl:grid-cols-2 gap-5 lg:gap-9">
            <WorkType
              title="Design"
              description="DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND
        INTO A VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE
        PRESENCE."
              num="01"
              image="/images/d.png"
              bgStyle="bg-[#1D1C1C]"
              descStyle=""
              titleStyle="text-white"
            />

            <WorkType
              title="Development"
              description="THROUGH MY DESIGN EXPERTISE, I CAN TRANSLATE YOUR BRAND'S
              IDENTITY INTO A VISUALLY STUNNING AND INTUITIVE ONLINE PLATFORM
              THAT CAPTIVATES AUDIENCES."
              num="02"
              image="/images/webss.jpg"
              bgStyle="bg-white"
              descStyle="text-zinc-600"
              titleStyle="text-black"
            />
          </div>

          {/* card 3 */}

          {/* <div className="w-[450px] lg:w-[750px] relative bg-[#BED5E5] p-6 lg:p-14 rounded-3xl flex space-x-5 lg:space-x-12">
            <div className="mx-auto w-[400px] lg:w-[750px] grid justify-center text-center  ">
              <Image
                src="/images/webss.jpg"
                className="rounded-full lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] object-cover"
                alt="uiux"
                width={200}
                height={200}
              />

              <h1 className="text-lg text-stone-800 lg:text-[3rem] mt-12">
                Mobile
              </h1>
            </div>

            <div>
              <p className="text-stone-700 text-sm md:text-sm lg:text-lg">
                THROUGH FRONT-END ENGINEERING EXPERTISE, WE ELEVATE PROJECTS
                INTO DYNAMIC, USER-CENTRIC WEB APPLICATIONS THAT DRIVE OPTIMAL
                FUNCTIONALITY AND ENGAGEMENT.
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl bottom-5 lg:text-[3rem] absolute lg:right-10 lg:bottom-10 right-5 text-stone-600  lg:text-5xl font-medium ">
              03
            </h1>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};
