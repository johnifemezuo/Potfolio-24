"use client";

import { PageContainer } from "@/components";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
        <motion.h1
          variants={easeInVariant}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7, delay: 0.3 }}
          className=" text-stone-500 xl:pl-20 gap-8 text-2xl md:text-3xl lg:text-4xl py-12  xl:tracking-tight leading-snug xl:space-y-8 xl:text-6xl 2xl:text-7xl"
        >
          I love creating captivating and functional interfaces that
         {" "} <span className=" text-white ">
            evoke emotions and establish a connection between
          </span> {" "}
          the brand and the users.
        </motion.h1>
      </div>
    </PageContainer>
  );
};
