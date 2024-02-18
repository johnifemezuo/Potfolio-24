import { ArrowLeft, ArrowRight } from "@/components";
import Image from "next/image";

export const WorkTimeLine = ({
  company,
  role,
  year,
  image,
}: {
  company: string;
  role: string;
  year: string;
  image: string;
}) => {
  return (
    <div className="relative group">
      <div className=" duration-500  cursor-pointer  hover:text-black border-y py-4 md:py-5 border-white/20 text-light tracking-tighter flex items-center justify-between text-xl md:text-2xl text-white hover:bg-white transition-all ">
        <ArrowRight className="hidden md:block group-hover:translate-x-12 transition-all duration-500  items-center  rotate-0 w-5 h-5  md:w-9 md:h-9 " />
        <h3 className="text-left min-w-[120px] md:w-[300px] text-lg md:text-2xl">
          {company}
        </h3>{" "}
        <h3 className="text-base md:text-2xl text-zinc-500 min-w-[150px] md:w-[400px]">
          {role}
        </h3>{" "}
        <h3 className="text-zinc-500 text-base md:text-2xl w-[120px] md:w-[200px]">
          {year}
        </h3>
        <ArrowLeft className="hidden md:block items-center transition-all duration-500 group-hover:-translate-x-6 text-white group-hover:text-black w-5 h-5 md:w-9 md:h-9" />
      </div>

      <div className="z-40 w-[400px] invisible group-hover:visible transition-all  hidden md:block h-[300px] bg-white absolute -top-12 right-20">
        <Image
          src={image}
          alt="me"
          width={400}
          className="object-cover w-full h-full"
          height={400}
        />
      </div>
    </div>
  );
};
