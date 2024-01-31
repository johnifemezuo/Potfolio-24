import Link from "next/link";
import { ArrowRight, ArrowUp } from "../..";

export const LinkOut = ({ link, title }: { link: string; title?: string }) => {
  return (
    <Link href={link} className=" transition  flex--items group">
      <ArrowRight className="text-black mr-3 w-6" />

      <span className="font-light text-zinc-900 md:text-2xl text-lg lg:text-xl group-hover:translate-x-3 transition-all duration-500">
        {title}
      </span>
    </Link>
  );
};
