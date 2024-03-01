import { PageContainer } from "@/components";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ExceptTwo = () => {
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
      <div ref={ref} className="xl:py-20 ">
        <div className="text-2xl md:text-3xl lg:text-4xl py-12  xl:tracking-tight xl:space-y-8 xl:text-[5rem] leading-snug">
          <motion.h1
            variants={easeInVariant}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.3 }} className=" text-stone-500 xl:pl-20">
            I enjoy creating new visions and trying
          </motion.h1>
          <motion.h1
            variants={easeInVariant}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.6 }} className=" text-white">different visual techniques. </motion.h1>
          <motion.h1
            variants={easeInVariant}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.7, delay: 0.9 }} className=" text-stone-500">
            Therefore, you can find many experiments here.
          </motion.h1>
        </div>
      </div>
    </PageContainer>
  );
};
