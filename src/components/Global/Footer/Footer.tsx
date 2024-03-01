"use client";
import {
  ArrowRight,
  BehanceIcon,
  ContactForm,
  DribbbleIcon,
  FullWidthButton,
  LinkedInIcon,
  PageContainer,
  SocialCard,
  TwitterIcon,
} from "@/components";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const easeInVariant = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  
  return (
    <PageContainer>
      <div id="contact"></div>
      <FullWidthButton name="Lets Get in touch" />

      <motion.div
        variants={easeInVariant}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        ref={ref}
        className="xl:flex xl:space-y-0 space-y-8 xl:space-x-6 mt-6 "
      >
        <div className="xl:w-[70%] grid grid-cols-2  gap-4 md:gap-6">
          <SocialCard
            name="Behance"
            link="https://www.behance.net/johnifem"
            icon={
              <BehanceIcon className=" text-white group-hover:text-zinc-700 duration-500" />
            }
          />
          <SocialCard
            name="Dribbble"
            link="https://dribbble.com/ifemezuo"
            icon={
              <DribbbleIcon className="text-white group-hover:text-zinc-700 duration-500" />
            }
          />
          <SocialCard
            name="LinkedIn"
            link="https://www.linkedin.com/in/john-ifemezuo-4332221a6/"
            icon={
              <LinkedInIcon className="text-white group-hover:text-zinc-700 duration-500" />
            }
          />
          <SocialCard
            name="Twitter"
            link="https://twitter.com/ifemezuo"
            icon={
              <TwitterIcon className="text-white group-hover:text-zinc-700 duration-500" />
            }
          />
        </div>

        <ContactForm />
      </motion.div>

      {/* Footer */}
      <div className="font-light text-zinc-500 text-sm  md:flex--items justify-between w-full border-border-color mt-4 border text-center  md:text-lg lg:text-xl py-4 md:py-6 px-6 rounded-xl">
        <p>Designed and built by John Ifemezuo. All Right Reserved.</p>
        <p>©2024.</p>
      </div>

      <Link href="#top">
        <div className="group flex--items space-x-3 text-center justify-center mt-4 pl-8 pb-6">
          <ArrowRight className="w-6 lg:w-8 text-white" />
          <h1 className="font-light text-white md:text-zinc-500  group-hover:text-white text-base lg:text-2xl pt-1 group-hover:translate-x-5 transition-transform duration-500">
            Scroll back top
          </h1>
        </div>
      </Link>
    </PageContainer>
  );
};
