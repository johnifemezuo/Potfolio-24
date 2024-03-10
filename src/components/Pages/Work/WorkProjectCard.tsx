"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IWorkProjectCard {
  link: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const WorkProjectCard = ({
  link,
  title,
  description,
  image,
  tags,
}: IWorkProjectCard) => {
  const { push } = useRouter();
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      onMouseLeave={() => setOnHover(false)}
      onMouseOver={() => setOnHover(true)}
      onClick={() => push(link)}
      className="group cursor-pointer md:h-auto"
    >
      <div className=" relative w-full h-[350px] xl:h-[350px] 2xl:h-[550px] transition-all overflow-hidden hover:rounded-2xl">
        <Image
          src={image}
          alt=""
          width={600}
          height={900}
          className="group-hover:scale-110 object-cover w-full h-full rounded-2xl md:rounded-none  duration-500 transition-all"
        />
      </div>
      <div className="py-3 border-t mt-5 lg:flex w-full justify-between items-center">
        <h3 className="text-2xl md:space-y-2 md:text-3xl font-semibold text-white grid h-12 md:h-14 overflow-hidden md:w-[280px] md:pt-2">
          <span
            className={`${
              onHover ? "translate-y-0 lg:-translate-y-[60px]" : ""
            }  transition-transform duration-500`}
          >
            {title}
          </span>
          <span
            className={`${
              onHover ? "translate-y-0 lg:-translate-y-[60px]" : ""
            }  transition-transform duration-500 hidden md:block`}
          >
            {title}
          </span>
        </h3>

        <div className="lg:space-y-6 md:pt-2 w-[360px] h-[70px]  overflow-hidden ">
          <div
            className={`space-y-2 space-x-2 w-full duration-500 transition-all text-sm lg:text-base lg:text-right text-zinc-300  ${
              onHover ? " lg:-translate-y-[100px] translate-y-0" : " lg:mt-1"
            }`}
          >
            {tags?.map((tag, k) => (
              <button
                key={k}
                className="px-4 py-2 border rounded-full border-zinc-300 text-zinc-300 text-xs uppercase "
              >
                {tag}
              </button>
            ))}
          </div>

          <p
            className={`${
              onHover ? "translate-y-0 lg:-translate-y-[60px]" : ""
            } duration-500 hidden lg:block tracking-tight transition-all w-full text-base md:text-base md:text-right text-zinc-300 
          `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
