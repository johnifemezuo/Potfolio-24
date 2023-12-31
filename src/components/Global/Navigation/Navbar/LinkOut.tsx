import Link from "next/link";
import { ArrowUp } from "../..";

export const LinkOut = ({ link, title }: { link: string; title?: string }) => {
  return (
    <Link href={link} className=" transition hover:text-stone-600 flex--items">
      <span className="font-light text-white md:text-2xl text-lg lg:text-xl">
        {title}
      </span>
      <span className="transition duration-500">
        <ArrowUp className="text-white" />
      </span>
    </Link>
  );
};