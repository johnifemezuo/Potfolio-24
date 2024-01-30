import Link from "next/link";
import { ArrowUp } from "../..";

export const LinkOut = ({ link, title }: { link: string; title?: string }) => {
  return (
    <Link href={link} className=" transition hover:text-stone-600 flex--items">
      <span className="font-light text-zinc-700 md:text-2xl text-lg lg:text-xl">
        {title}
      </span>
      <span className="transition duration-500 hidden md:block">
        <ArrowUp className="text-white" />
      </span>
    </Link>
  );
};