"use client";

import {
  ArrowRight,
  Footer,
  GridTwoColsContainer,
  PageContainer,
  ProjectImagePreview,
  WorkProjectCard,
} from "@/components";
import { projects } from "@/contents";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SingleWorkPageLayout = ({
  children,
  title,
  description,
  role,
  duration,
  year,
  src,
  liveSite,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  role: string;
  duration: string;
  year: string;
  src: string;
  liveSite?: string;
}) => {
  const { push } = useRouter();

  return (
    <div>
      <div className="bg-white pb-44">
        <div className="max-w-[1300px] mx-auto px-4 md:px-0">
          <div className=" py-9 md:py-14 lg:py-28 ">
            <GridTwoColsContainer>
              <div className="w-full">
                <h1 className="text-4xl md:text-5xl lg:text-7xl">{title}</h1>
              </div>

              <div className="w-full ">
                <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
              </div>
            </GridTwoColsContainer>

            <div className="mt-9 md:mt-28 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 md:">
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-sm text-zinc-500 uppercase">
                  ROLE / SERVICES
                </h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {role}
                </p>
              </div>
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-sm text-zinc-500 uppercase">DURATION</h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {duration}
                </p>
              </div>
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-sm text-zinc-500 uppercase">YEAR</h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {year}
                </p>
              </div>
            </div>
          </div>

          <ProjectImagePreview src={src} liveSite={liveSite} />

          <div>{children}</div>
        </div>
      </div>

      <div className="bg-black py-12">
        <PageContainer>
          <div className="lg:flex lg:py-12 space-y-12 lg:space-y-0 mb-20 items-center">
            <div className="md:w-[400px]">
              <Link href="/my-works">
                <div className="lg:w-[600px] relative py-12 lg:py-0 ">
                  <div className=" space-y-4 lg:space-y-8  text-white text-3xl md:text-3xl font-medium lg:text-6xl">
                    More work? <br />
                    this way
                  </div>
                </div>
              </Link>

              <div className="flex space-x-3 md:mt-8">
                <ArrowRight className=" h-8 w-8 lg:w-12 lg:h-12 text-white" />

                <button
                  onClick={() => push("/work")}
                  className=" font-medium text-sm text-zinc-200 flex items-center space-x-3 rounded-full px-5 py-3 border border-zinc-200  hover:border-zinc-800 hover:text-white duration-300 transition-all "
                >
                  See All work
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
              <WorkProjectCard
                link={projects[2].link}
                title={projects[1].title}
                description={projects[1].description}
                image={projects[1].image}
                tags={projects[1].tags}
              />
              <WorkProjectCard
                link={projects[2].link}
                title={projects[1].title}
                description={projects[1].description}
                image={projects[1].image}
                tags={projects[1].tags}
              />
            </div>
          </div>
        </PageContainer>

        <Footer />
      </div>
    </div>
  );
};
