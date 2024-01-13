import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const WorkProjectCard = ({ link }: { link: string }) => {
  const { push } = useRouter();
  const [onHover, setOnHover] = useState(false);

  console.log(onHover);

  return (
    <div
      onMouseLeave={() => setOnHover(false)}
      onMouseOver={() => setOnHover(true)}
      onClick={() => push(link)}
      className="group cursor-pointer  md:h-[720px]"
    >
      <div className=" relative w-full h-[300px] md:h-[600px]  transition-all overflow-hidden ">
        <Image
          src="/images/website.webp"
          alt=""
          width={600}
          height={900}
          className="object-cover w-full h-full rounded-2xl md:rounded-none group-hover:rounded-3xl duration-500 transition-all"
        />
      </div>
      <div className="py-3 space-y-3 border-t mt-5 md:flex w-full md:justify-between items-center">
        <h3 className="text-xl md:text-3xl font-semibold text-white  grid h-8 overflow-hidden md:min-w-[130px]">
          <span
            className={`${
              onHover ? "-translate-y-[38px]" : ""
            }  transition-transform duration-500`}
          >
            Rendlr
          </span>
          <span
            className={`${
              onHover ? "-translate-y-[38px]" : ""
            }  transition-transform duration-500`}
          >
            Rendlr
          </span>
        </h3>

        <p className="w-full text-sm md:text-base md:text-right text-zinc-300 font-light  ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elitror
          nescObcaecati iure quasi a expeditaEum, alias!
        </p>
      </div>
    </div>
  );
};
