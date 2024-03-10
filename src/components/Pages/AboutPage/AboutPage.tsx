"use client";

import {
  ArrowRight,
  DesignStepCard,
  PageContainer,
  RoundedArt,
  ScrollReveal,
} from "@/components";
import Image from "next/image";
import { WorkTimeLine } from "./WorkTimeLine";
import { motion } from "framer-motion";
import Reveal from "@/components/Global/Animation/Reveal";

export const AboutPage = () => {
  return (
    <PageContainer>
      <div className="relative mb-12 md:mb-20 rounded-xl border border-[#312F2F] h-[80vh] md:h-[70vh] lg:h-[86vh] xl:h-[100vh] py-8 md:py-14 md:p-8 md:px-3 lg:12 xl:px-12">
        <div className="flex space-x-4 items-center md:space-x-12 ml-6 m md:-mt-12 mb-4">
          <motion.div
            initial={{
              x: "-50",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.8, bounce: 0.8 }}
          >
            <ArrowRight className="text-white items-center h-8 md:h-14 w-8 md:w-14 -mt-12" />
          </motion.div>

          <motion.h1
            initial={{
              y: 90,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.5, duration: 0.8, bounce: 0.3 }}
            className="flex space-x-3 "
          >
            <span className="text-white text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[10rem] md:text-[6rem]">
              I`m
            </span>
            <span className="text-stone-500  text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[10rem] md:text-[6rem]">
              John
            </span>
          </motion.h1>
        </div>

        <div className="md:flex space-x-4 md:space-x-44 space-y-4">
          <motion.div
            initial={{
              scale: 0.5,
              y: 20,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.7, duration: 1, bounce: 0.3 }}
            className="mx-auto md:mx-0 bg-gray-600 w-[130px] rounded-full h-[130px] lg:w-[540px] md:w-[610px]  md:h-[310px] lg:h-[360px] overflow-hidden"
          >
            <Image
              src="/images/me2.jpg"
              alt="me"
              width={500}
              className="object-cover w-full h-full"
              height={700}
            />
          </motion.div>

          <div className="w-full  ">
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ delay: 0.7, duration: 1, bounce: 0.3 }}
              className="flex--items space-x-6 md:space-x-24"
            >
              <div className="flex items-center space-x-3">
                <span>
                  <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
                </span>

                <div className="space-y-3">
                  <h3 className="text-2xl text-white md:text-3xl xl:text-5xl">
                    <span>Desi</span>
                    <span className="text-stone-500">gner</span>
                  </h3>
                </div>
              </div>

              <div className="flex space-x-3 items-center">
                <span>
                  <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
                </span>

                <div className="space-y-3">
                  <h3 className="text-2xl text-white md:text-3xl xl:text-5xl">
                    <span>Deve</span>
                    <span className="text-stone-500">loper</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ delay: 1, duration: 1, staggerChildren: 0.6 }}
              className="pt-0 md:pt-12"
            >
              <p className="text-zinc-500 tracking-tighter  text-2xl md:text-3xl lg:text-4xl py-6 xl:space-y-8 xl:text-5xl leading-8 md:leading-10">
                I have always loved creating and surprising others. This
                experience helped me become a pro at designing and developing.
                <span className="text-white">
                  I consider design to be my true calling, Which I have been
                  doing for many years.
                </span>
                Creating web interface and softwares that user will love using.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <ScrollReveal>
          <div className="py-4">
            <p className="text-zinc-500 tracking-tighter text-2xl md:text-3xl lg:text-4xl py-0 md:py-12 xl:space-y-8 xl:text-5xl leading-8 md:leading-10">
              My goal as a designer is to fuse creativity with analytical
              thinking
              <span className="text-white">
                {" "}
                to deliver intuitive solutions for all users{" "}
              </span>
              <span className="text-white">
                As a result, my work captivates both my clients
              </span>{" "}
              and their users, evoking a sense of awe and excitement.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="py-4 mb-4">
            <p className="text-zinc-500 tracking-tighter text-2xl md:text-3xl lg:text-4xl py-0 md:py-12 xl:space-y-8 xl:text-5xl leading-8 md:leading-10">
              Am equally a software Engineer with 5 years experience in
              designing and building softwares.
              <span className="text-white">
                {" "}
                I love to solve problems and i help businesses
              </span>{" "}
              <span className="text-white">
                and agencies solve complex user interface problems
              </span>{" "}
              where i utilize my skills to create a solution.
            </p>
          </div>
        </ScrollReveal>

        <a
          href="/resume/john-cv.pdf"
          download
          className="border mt-12 hover:bg-zinc-800 transition-all text-zinc-400 border-zinc-700 rounded-xl p-4 md:w-auto w-full sm:inline-block space-y-2 md:p-4  
        "
        >
          Download CV
        </a>
      </div>

      <div>
        {/*================ Design Steps =================== */}
        <ScrollReveal>
          <div className="py-16 md:py-20">
            <p className="text-zinc-200 tracking-tighter  min-w-[200px]  text-3xl md:text-3xl lg:text-4xl pb-6 xl:space-y-8 xl:text-7xl leading-10">
              My Design process.
            </p>

            <div className="gap-3  flex flex-wrap">
              <DesignStepCard
                num="01"
                title="Project brief & Ideation"
                description="Understanding problem statement and idea generation."
              />
              <DesignStepCard
                num="02"
                title="Research"
                description="User Research, Competitive Research, User Persona. User Flow..."
              />
              <DesignStepCard
                num="03"
                title="Design and Prototype"
                description="Designing highly Aesthetically pleasing and useable interface and prototyping for simulation."
              />
              <DesignStepCard
                num="04"
                title="User Testing"
                description="Testing with users. Modify and iterate user feedback into design."
              />
              <DesignStepCard
                num="05"
                title="Development"
                description="Develop the user interface with recent and standard Front end frames like Nextjs, Reactjs or ReactNative."
              />
              <DesignStepCard
                num="06"
                title="Client/Hand Off"
                description="Project is deployed or handed off."
              />
            </div>
          </div>
        </ScrollReveal>

        {/*================ Brands i worked with =================== */}

        <ScrollReveal>
          <div className="py-8 md:py-20 md:mb-28 mb-12">
            <p className="text-zinc-200 tracking-tighter  min-w-[200px]  text-3xl md:text-3xl lg:text-4xl pb-6 xl:space-y-8 xl:text-7xl leading-10">
              Brands I have worked with & <br /> Experiences.
            </p>

            <div>
              <WorkTimeLine
                company="Osmaxin"
                role="UI/UX Designer & Front end Developer"
                year="2019 - 2024"
                image="/images/rendlr/Thumbnail.png"
              />
              <WorkTimeLine
                company="Ventlio"
                role="UI/UX Designer"
                year="2021 - 2024"
                image="/images/zigah/Homepage.png"
              />
              <WorkTimeLine
                company="Zigah.co"
                role="Front end Engineer"
                year="2022 - 2024"
                image="/images/zigah/zigah-mock.jpg"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageContainer>
  );
};
