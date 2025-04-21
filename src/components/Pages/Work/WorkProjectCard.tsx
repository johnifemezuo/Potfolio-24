/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
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
    <Link href={`/project/${link}`}> 
    <div
      onMouseLeave={() => setOnHover(false)}
      onMouseOver={() => setOnHover(true)}
      className="group cursor-pointer md:h-auto"
    >
      <div className=" relative w-full h-[270px] xl:h-[350px] 2xl:h-[450px] transition-all overflow-hidden hover:rounded-2xl">
        <img
          src={image}
          alt="growthlobby project"
          className="group-hover:scale-110 object-cover w-full h-full rounded-2xl md:rounded-none  duration-500 transition-all"
        />
      </div>
      <div className="py-4 border-t mt-5   w-full ">
          <div
            className={`space-y-2 mb-2 space-x-2 w-full duration-500 transition-all text-sm lg:text-base  text-zinc-300 `}
          >
           
              <button
                
                className="px-4 py-2 border rounded-full border-zinc-300 text-zinc-300 text-xs uppercase "
              >
                {tags}
              </button>
            
          </div>
        
        <h3 className="text-2xl  md:text-2xl font-semibold text-white group-hover:underline transition-all duration-500  md:pt-2">
           {title}
        </h3>

      </div>
    </div>
    </Link>
  );
};
