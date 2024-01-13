"use client"
import { Footer, Navigation } from "../../index";

export function Layout ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
