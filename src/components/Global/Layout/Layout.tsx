import { Footer, Navigation } from "../../index";
import { motion, useScroll } from "framer-motion";

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#d1ef1a] z-50 "
        style={{ scaleX: scrollYProgress }}
      />
      <Navigation />
      {children}
      <Footer />

    </div>
  );
}
