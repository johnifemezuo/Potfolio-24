"use client";

import { PageContainer } from "@/components";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const ExceptOne = () => {
  useGSAP(() => {
    gsap.from("#trigger", {
      scrollTrigger: {
        trigger: "#trigger",
        toggleActions: "restart none none none",
        // start: "30px ",
      },

      y: 100,
      duration: 0.8,
      stagger: 0.3,
    });
  }, []);

  return (
    <PageContainer>
      <div className="  xl:py-20 ">
        <div className=" text-2xl md:text-3xl lg:text-4xl py-12  xl:tracking-tight leading-snug xl:space-y-8 xl:text-[4rem]">
          <h1 id="trigger" className=" text-stone-500 xl:pl-20">
            I love creating captivating and functional interfaces that
          </h1>
          <h1 id="trigger" className=" text-white ">
            evoke emotions and establish a connection between
          </h1>
          <h1 id="trigger" className=" text-stone-500 ">
            the brand and the users.
          </h1>
        </div>
      </div>
    </PageContainer>
  );
};
