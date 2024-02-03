import {
  ArrowDownIcon,
  ArrowRight,
  PageContainer,
  ProjectCard,
} from "@/components";
import { projects } from "@/contents";
import Link from "next/link";

export const SelectedWorks = () => {
  return (
    <div className="bg-[#110D0D] w-full pt-12 md:pt-20 xl:pt-44">
      <div className="pb-6 md:pb-20">
        <PageContainer>
          <div className="lg:space-y-20 space-y-6 px-4 py-8 xl:px-20 lg:py-20 border border-border-color rounded-xl">
            <ArrowRight className="text-white items-center  rotate-90 w-8 h-12 xl:w-20 xl:h-20 md:w-14 md:h-14" />

            <div className=" lg:flex--between space-y-5 lg:space-y-0">
              <h1 className="font-semibold md:max-w-xl text-3xl lg:text-6xl xl:text-8xl  text-stone-100">
                Selected Works
              </h1>

              <p className="font-extralight text-sm lg:w-[400px] 2xl:w-[500px] sm:text-lg  md:text-lg lg:text-2xl leading-snug text-zinc-100 lg:font-medium">
                I have crushed it on lots of projects, I both Design and Front
                end development and I have got the receipts to prove it in my
                portfolio of case studies.
              </p>
            </div>
          </div>
        </PageContainer>
      </div>

      <div className="overflow-x-scroll bg-white w-full  ">
        <div className="lg:flex lg:w-[340%]   overflow-x-auto">
          {projects?.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              img={project.image}
              desc={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}

          <Link href="/my-works">
            <div className="lg:w-[600px] relative py-12 lg:py-0 bg-white  grid lg:h-screen place-content-center ">
              <div className="grid justify-items-center space-y-4 lg:space-y-8">
                <h1 className="text-xl md:text-3xl font-medium lg:text-[3rem] text-zinc-900">
                  Wait there is more?
                </h1>

                <button className="flex--items space-x-3 text-zinc-600 hover:text-zinc-700">
                  <p className="sm:text-xl ">View showcase</p>
                  <ArrowDownIcon className="-rotate-45 h-4 w-4 lg:w-7 lg:h-7" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
