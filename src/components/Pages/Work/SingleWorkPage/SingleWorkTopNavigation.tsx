"use client";

import { ArrowLeft, LeftArrow, Logo, PageContainer } from "@/components";
import { useRouter } from "next/navigation";

export const SingleWorkTopNavigation = ({
  projectTitle,
}: {
  projectTitle?: string;
}) => {
  const { push } = useRouter();

  return (
    <div className=" bg-white w-full">
      <PageContainer>
        <div className="py-5 flex items-center justify-between w-full">
          <div className="hidden md:block">
            <Logo dark />
          </div>

          <button
            onClick={() => push("/work")}
            className=" font-medium text-base flex items-center space-x-3 rounded-full px-4 py-3 border border-zinc-200  hover:border-zinc-800 hover:text-zinc-800 duration-300 transition-all "
          >
            <span>
              <LeftArrow />
            </span>
            <span> Go Back</span>
          </button>

          <button
            onClick={() => push("#contact")}
            className=" px-5 py-3 font-medium bg-accent-colorTwo text-zinc-800 rounded-full text-sm uppercase transition-all duration-300 hover:border-zinc-400"
          >
            Get in touch
          </button>
        </div>
      </PageContainer>
    </div>
  );
};
