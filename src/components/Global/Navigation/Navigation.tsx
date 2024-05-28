"use client";

import { useRouter } from "next/navigation";
import { Logo, Navbar, PageContainer, SiteTime } from "..";
import { motion } from "framer-motion";

const buttonVariant = {
  hover: {
    scale: 1.1,
    yoyo: Infinity,
    transition: { duration: 0.6, type: "spring", when: "beforeChildren" },
  },
};
export const Navigation = () => {
  const { push } = useRouter();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full bg-background-bg py-4 "
    >
      <PageContainer>
        <div className=" flex items-center justify-between text-white">
          <Logo />

          <div className="hidden lg:block">
            <SiteTime />
          </div>

          <div className="flex--items space-x-8">
            <motion.button
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
              variants={buttonVariant}
              whileHover="hover"
              onClick={() => push("#contact")}
              className="w-full font-medium px-5 py-3 bg-accent-colorTwo text-zinc-800 rounded-full hidden md:block"
            >
              Get in touch
            </motion.button>
            <Navbar />
          </div>
        </div>
      </PageContainer>
    </motion.div> 
  );
};
