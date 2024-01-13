import Link from "next/link";
import { LogoIcon } from "../Icons/LogoIcon";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex space-x-3">
        <div>
          <LogoIcon />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl text-stone-200">John Ifemezuo</h1>
          <p className="uppercase text-sm text-stone-500">Hybrid Designer</p>
        </div>
      </div>
    </Link>
  );
};
