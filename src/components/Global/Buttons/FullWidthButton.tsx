import React from 'react'
import { ArrowLeft, ArrowRight } from '..';

export const FullWidthButton = ({ name }: { name?:  string})=>{
  return (
    <button className="group hover:border-white transition-all duration-300 w-full flex--items justify-between px-4 xl:px-12 py-4 lg:py-9 cursor-pointer border border-border-color rounded-2xl">
      <ArrowRight className="transition-all duration-500 group-hover:translate-x-6 text-white items-center  rotate-0 w-5 h-5  md:w-9 md:h-9" />

      <div className=" lg:flex--items space-x-3">
        <h1 className="group-hover:text-white transition-colors  text-2xl lg:text-5xl xl:text-6xl font-light  text-stone-400">{name}</h1>
      </div>

      <ArrowLeft className="text-white items-center transition-all duration-500 group-hover:-translate-x-6  w-5 h-5 md:w-9 md:h-9" />
    </button>
  );
}
