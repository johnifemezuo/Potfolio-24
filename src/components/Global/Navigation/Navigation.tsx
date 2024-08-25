"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo, Navbar, PageContainer, SiteTime } from "..";
import { usePathname } from 'next/navigation';

const buttonVariant = {
  hover: {
    scale: 1.1,
    yoyo: Infinity,
    transition: { duration: 0.6, type: "spring", when: "beforeChildren" },
  },
};
export const Navigation = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full bg-[#070505] z-50 py-4  fixed top-0 inset-x-0"
    >
      <PageContainer>
        <div className=" flex items-center justify-between text-white">
          <Logo />

          <div className="hidden lg:block ">
            <SiteTime />
          </div>

          <div className="flex--items space-x-8 ">

            <div className=" hidden md:flex--items space-x-5 min-w-[180px]">
              <Link href="/" className={`text-lg transition-all ${pathname === "/" ? "text-white" : "text-zinc-500 hover:text-zinc-400"}`}>
                Home
              </Link>
              <Link href="/work" className={`text-lg transition-all ${pathname === "/work" ? "text-white" : "text-zinc-500 hover:text-zinc-400"}`}>Work</Link>
              <Link href="/about-me" className={`text-lg transition-all ${pathname === "about" ? "text-white" : "text-zinc-500 hover:text-zinc-400"}`}>About</Link>
            </div>

            <motion.button
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
              variants={buttonVariant}
              whileHover="hover"
              onClick={() => push("#contact")}
              className="w-full font-medium px-4 py-2.5 bg-accent-colorTwo text-zinc-800 rounded-full hidden md:block"
            >
              Get in touch
            </motion.button>

            <div className="md:hidden">
              <Navbar />
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
};
