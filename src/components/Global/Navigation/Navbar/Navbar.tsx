import { MenuBtn } from ".";
import { CloseBtn } from "./CloseBtn";
import { LinkOut } from "./LinkOut";
import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <div className="relative">
      <MenuBtn />

      <div
        className={`${false ? "block" : "hidden"} bg-accent-color  rounded-[40px] p-5 lg:p-8 lg:h-[650px] absolute top-0 right-0 lg:w-[600px]`}
      >
        <div>
          <CloseBtn />
        </div>

        <nav className="mt-14">
          <p className="uppercase text-stone-300">Navigation</p>
          <ul className="mt-12 flex flex-col space-y-6">
            <NavLink title="Home" link="/" />
            <NavLink title="My Work" link="/works" />
            <NavLink title="About me" link="/about-me" />
            <NavLink title="Contact me" link="#contact" />
          </ul>
        </nav>

        <div className="flex items-end justify-between w-full  mt-12">
          <LinkOut title="ifemohn@gmail.com" link="/" />
          <div className="grid ">
            <LinkOut title="Behance" link="/behance" />
            <LinkOut title="Twitter" link="/twitter" />
            <LinkOut title="Linkedin" link="/linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}
