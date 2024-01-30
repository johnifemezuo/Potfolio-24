"use client";

import { useState } from "react";
import { MenuBtn } from ".";
import { CloseBtn } from "./CloseBtn";
import { LinkOut } from "./LinkOut";
import { NavLink } from "./NavLink";

export function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="relative">
        <MenuBtn onClick={() => setOpenNav(!openNav)} />

        <div
          className={`${
            openNav ? "block" : "hidden"
          }  bg-white z-50 md:rounded-[40px] p-6 lg:p-8 sm:w-[500px] lg:h-[650px] fixed md:absolute top-0 md:left-auto left-0 right-0 w-full lg:w-[600px]`}
        >
          <div>
            <CloseBtn onClick={() => setOpenNav(false)} />
          </div>

          <nav className="mt-14">
            <p className="uppercase text-stone-500 ">Navigation</p>
            <button onClick={() => setOpenNav(false)} className="mt-12 flex flex-col space-y-6">
              <NavLink title="Home" link="/" />
              <NavLink title="My Work" link="/work" />
              <NavLink title="About me" link="/about-me" />
              <NavLink title="Contact me" link="#contact" />
            </button>
          </nav>

          <button onClick={() => setOpenNav(false)} className="flex items-end justify-between w-full  mt-12">
            <LinkOut title="ifemohn@gmail.com" link="/" />
            <div className="grid gap-3">
              <LinkOut title="Behance" link="/behance" />
              <LinkOut title="Twitter" link="/twitter" />
              <LinkOut title="Linkedin" link="/linkedin" />
            </div>
          </button>
        </div>
      </div>

      <button
        onClick={() => setOpenNav(false)}
        className={`bg-transparent fixed z-10 inset-0 w-full h-screen ${
          openNav ? "block" : "hidden"
        }`}
      />
    </>
  );
}
