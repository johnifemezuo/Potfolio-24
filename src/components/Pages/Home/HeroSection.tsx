"use client";

import {
  ArrowDownIcon,
  ArrowRight,
  HeroRoundedArt,
  PageContainer,
  RoundedArt,
} from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  const introTextVariants = {
    from: {
      y: 90,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  return (
    <PageContainer>
      <div
        id="top"
        className="relative rounded-xl border border-[#312F2F] h-auto py-20 md:py-14 md:p-8 px-3 lg:pb-12 xl:px-20
      "
      >
        <div className="lg:-space-y-6 md:-space-y-6">
          <motion.h1
            variants={introTextVariants}
            initial="from"
            animate="to"
            className="flex space-x-3 text-white"
          >
            <span className=" text-[3rem] sm:text-[4rem] lg:text-[7rem] xl:text-[9rem] md:text-[6rem]">
            I`m 
            </span>{" "}
            <span className="text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[9rem] md:text-[6rem] ">
            John,
            </span>
          </motion.h1>
          <div
            className="flex--items space-x-4 md:space-x-6
          "
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, bounce: 1.7 }}
              id="heroImg"
              className="rounded-full w-[66px] h-[66px] lg:w-[180px] md:w-[110px] md:h-[110px] lg:h-[180px] overflow-hidden"
            >
              <Image src="/images/me1.jpg" alt="me" width={200} height={200} />
            </motion.div>
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 90, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5, bounce: 1.5 }}
              id="heroTitle"
              className=" text-white md:text-[6rem] text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[rem]"
            >
              Ifemezuo
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 md:mt-20 lg:space-x-[15%]  lg:flex"
        >
          <div
            id="arrow"
            className=" justify-center  lg:inline-block text-center hidden"
          >
            <p className="uppercase w-[127px] text-lg font-light  md:mb-9 mb-6 text-stone-400">
              Scroll down
            </p>

            <div className="rotate-90">
              <motion.div
                whileHover={{ scale: 1.1, y: 33 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              >
                <ArrowRight className=" text-white items-center scroll-down-arrow ml-8 xl:w-12 xl:h-12  w-9 h-9" />
              </motion.div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-12 lg:max-w-[1100px] justify-between mx-auto md:space-x-6 space-y-8 md:space-y-0">
            <div id="careerTitle" className="flex space-x-3">
              <span>
                <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px] spinnerLoop" />
              </span>
              <div className="space-y-3">
                <h3 className="text-2xl text-white md:text-3xl xl:text-3xl underline pb-2 font-light">
                  <span>Product Desi</span>
                  <span className="text-stone-500">gner</span>
                </h3>
                <p className=" md:text-base 2xl:text-lg text-white font-light">
                  I am an independent product designer specializing in creating
                  visually appealing and high-converting websites and apps.
                </p>
              </div>
            </div>

            <div id="careerTitle" className="flex space-x-3">
              <span>
                <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px] spinnerLoop" />
              </span>
              <div className="space-y-3">
                <h3 className="text-2xl text-white md:text-3xl xl:text-3xl underline pb-2 font-light">
                  <span>Deve</span>
                  <span className="text-stone-500">Loper</span>
                </h3>
                <p className="  md:text-base 2xl:text-lg text-white font-light">
                  Experienced Front-End Developer with over 4 years of experience in
                  designing and developing user interfaces for companies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 lg:hidden">
          <div className="mx-auto border-border-color justify-center w-[78px] h-[78px] grid border rounded-full place-content-center text-center ">
            {/* <p className="uppercase text-lg font-light  mb-6 text-stone-400">Scroll down</p> */}

            <ArrowDownIcon className="text-white w-20 items-center  scroll-up-arrow" />
          </div>
        </div>

        {/* Art */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.6 }}
          className="absolute md:top-12 lg:top-24 md:right-12 lg:right-24 top-6 right-6"
        >
          <HeroRoundedArt className="spinnerLoop xl:w-[500px] lg:w-[370px] lg:h-[370px] xl:h-[500px] w-[200px] h-[200px] md:w-[200px] md:h-[200px]" />
        </motion.div>
        <div className="rounded-linear absolute bg-[#98843A] top-0 right-0 border w-[300px] h-[300px]"></div>
      </div>
    </PageContainer>
  );
};
