"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface IWorkStyle {
  image: string;
  title: string;
  description: string;
  num: string;
  numStyle?: string;
  descStyle?: string;
  bgStyle?: string;
  titleStyle?: string;
}
export const WorkType = ({
  image,
  title,
  description,
  num,
  numStyle,
  descStyle,
  bgStyle,
  titleStyle,
}: IWorkStyle) => {
  return (
    <div
      className={`space-x-6 relative  w-full p-4 md:p-6 lg:p-12 rounded-3xl flex  cursor-pointer ${bgStyle}`}
    >
      <div className="md:w-[400px] lg:min-w-[220px]   grid justify-center text-center  ">
        <Image
          src={image}
          className="mx-auto rounded-full lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] object-cover"
          alt="uiux"
          width={250}
          height={250}
        />

        <h1
          className={` text-lg md:text-2xl lg:text-4xl font-medium min-w-[100px] mt-12 ${titleStyle}`}
        >
          {title}
        </h1>
      </div>

      <p
        className={`text-white text-sm md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl ${descStyle}`}
      >
        {description}
      </p>

      <h1
        className={`text-2xl md:text-3xl absolute right-5 lg:right-10 bottom-3 lg:bottom-10 text-stone-400  lg:text-5xl font-medium ${numStyle}`}
      >
        {num}
      </h1>
    </div>
  );
};
