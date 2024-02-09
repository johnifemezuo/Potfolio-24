import { ArrowDownIcon } from "../Icons";
import Link from "next/link";

export const RoundedButton = ({ link }: { link: string }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <button className="group space-x-1 flex--items  top-0 z-50 w-[120px] md:w-[200px]   p-4 bg-black text-white rounded-full shadow-lg text-xl h-[120px] md:h-[200px] grid place-content-center ">
        <span className="text-sm md:text-lg">Live site</span>
        <span className="rotate-180 group-hover:translate-x-2   duration-500 transition">
          <ArrowDownIcon className="rotate-45 w-6 h-6" />
        </span>
      </button>
    </Link>
  );
};
