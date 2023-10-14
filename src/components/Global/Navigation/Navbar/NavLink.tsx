
import Link from "next/link";
import { ArrowUp } from "../..";

export function NavLink({ link, title }: { link: string; title?: string }) {
  return (
    <>
      <Link
        href={link}
        className="text-white flex--items space-x-4 md:text-2xl text-lg lg:text-4xl group transition hover:text-stone-600"
      >
        <span>{title}</span>
        <span className="transition duration-500 invisible group-hover:visible">
          <ArrowUp />
        </span>
      </Link>
    </>
  );
}
