"use client";

import { PageContainer } from "@/components";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ExceptOne = () => {

  const easeInVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <PageContainer>
      <div ref={ref} className="  xl:py-20 ">
        <div className=" text-2xl md:text-3xl lg:text-4xl py-12  xl:tracking-tight leading-snug xl:space-y-8 xl:text-[4rem]">
          <motion.h1
            variants={easeInVariant}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.3 }}
            className=" text-stone-500 xl:pl-20"
          >
            I love creating captivating and functional interfaces that
          </motion.h1>

          <motion.h1
            variants={easeInVariant}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.6 }}
            className=" text-white "
          >
            evoke emotions and establish a connection between
          </motion.h1>

          <motion.h1
            variants={easeInVariant}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.9 }}
            className=" text-stone-500 "
          >
            the brand and the users.
          </motion.h1>
        </div>
      </div>
    </PageContainer>
  );
};
