"use client";

import { PageContainer } from "@/components";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { gsap } from "gsap";

export const ExceptOne = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.to("#para", {
        ScrollTrigger: {
          trigger: "#para",
          start: "50px center",
          toggleActions: "restart, none, none, none",
        },

        y: -50,
        opacity: 1,
        duration: 2,
        ease: "power1",
        stagger: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <PageContainer>
      <div ref={container} className="  xl:py-20 ">
        <div className="text-2xl md:text-3xl lg:text-4xl py-12  xl:tracking-tight leading-snug xl:space-y-8 xl:text-[4rem]">
          <h1 id="para" className=" text-stone-500 xl:pl-20">
            I love creating captivating and functional interfaces that
          </h1>
          <h1 id="para" className=" text-white">
            evoke emotions and establish a connection between
          </h1>
          <h1 id="para" className=" text-stone-500">
            {" "}
            the brand and the users.
          </h1>
        </div>
      </div>
    </PageContainer>
  );
};
