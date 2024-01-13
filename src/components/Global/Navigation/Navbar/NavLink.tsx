import Link from "next/link";
import { ArrowUp } from "../..";

export function NavLink({ link, title }: Readonly<{ link: string; title?: string }>) {
  return (
      <Link
        href={link}
        className="text-white flex--items space-x-4 md:text-2xl text-3xl lg:text-4xl  transition group hover:text-stone-600"
      >
        <span>{title}</span>
        <span className="transition duration-500 hidden ">
          <ArrowUp />
        </span>
      </Link>
  );
}
