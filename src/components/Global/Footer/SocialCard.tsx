import Link from 'next/link';
import React from 'react'
import { ArrowRight } from '..';

export const SocialCard = ({icon, link, name}:{icon: React.ReactNode, link: string, name: string}) => {
  return (
    <Link href={link} passHref target='_blank'>
      <div className="hover:border-white transition-all duration-500 group relative border border-border-color rounded-xl p-3 md:p-6 h-[300px] lg:h-[400px]">
        <span className="group-hover:bg-white border rounded-full border-border-color group-hover:border-white transition-all duration-500 w-14 h-14 lg:w-20 lg:h-20 p-4 grid place-content-center">
         {icon}
        </span>

        <div className="flex--items space-x-3 absolute bottom-0 left-0 pl-4 md:pl-8 pb-6">
          <ArrowRight className="w-6 md:w-10" />
          <h1 className=" text-white text-lg lg:text-2xl pt-1 group-hover:translate-x-5 transition-transform duration-500">
            {name}
          </h1>
        </div>
      </div>
    </Link>
  );
}
