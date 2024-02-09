import { ReactNode } from "react";

export const Para = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg md:text-xl text-zinc-600 ">{children}</p>;
};
