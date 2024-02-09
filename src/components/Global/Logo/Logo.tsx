import Link from "next/link";
import { LogoIcon } from "../Icons/LogoIcon";

export const Logo = ({ dark = false }: { dark?: boolean }) => {
  return (
    <Link href="/">
      <div className="flex space-x-3 items-center">
        <div>
          <LogoIcon />
        </div>
        <div className="flex flex-col">
          <h1 className={`text-lg md:text-xl lg:text-2xl font-semibold ${dark ? "text-stone-700" : "text-stone-200"}`}>
            John Ifemezuo
          </h1>
          <p className={`uppercase text-sm  ${dark ? "text-zinc-400" : "text-stone-500"}`}>Hybrid Designer</p>
        </div>
      </div>
    </Link>
  );
};
