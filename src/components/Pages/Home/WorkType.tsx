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
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.9, zIndex: 1 }}
      transition={{ duration: 0.7 }}
      className={`space-x-6 relative  w-full p-4 md:p-6 lg:p-14 rounded-3xl flex  cursor-pointer ${bgStyle}`}
    >
      <div className="md:w-[300px] lg:w-[400px] grid justify-center text-center  ">
        <Image
          src={image}
          className="mx-auto rounded-full lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] object-cover"
          alt="uiux"
          width={200}
          height={200}
        />

        <h1 className={` text-lg lg:text-[2rem] mt-12 ${titleStyle}`}>
          {title}
        </h1>
      </div>

      <p className={`text-white text-sm md:text-base lg:text-lg ${descStyle}`}>
        {description}
      </p>

      <h1
        className={`text-2xl md:text-3xl absolute right-5 lg:right-10 bottom-3 lg:bottom-10 text-stone-400  lg:text-5xl font-medium ${numStyle}`}
      >
        {num}
      </h1>
    </motion.div>
  );
};
