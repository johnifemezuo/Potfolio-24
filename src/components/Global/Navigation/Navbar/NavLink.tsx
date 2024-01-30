import Link from "next/link";
import { ArrowUp } from "../..";

export function NavLink({
  link,
  title,
}: Readonly<{ link: string; title?: string }>) {
  return (
    <Link
      href={link}
      className="text-black flex--items space-x-4 md:text-2xl text-3xl lg:text-4xl  transition group hover:text-stone-600"
    >
      <div className=" overflow-hidden grid group h-[40px]">
        <span className="group-hover:-translate-y-10 duration-500 transition-all">{title}</span>
        <span className="group-hover:-translate-y-10 duration-500 transition-all">{title}</span>
      </div>
      <span className="transition duration-500 hidden ">
        <ArrowUp />
      </span>
    </Link>
  );
}
