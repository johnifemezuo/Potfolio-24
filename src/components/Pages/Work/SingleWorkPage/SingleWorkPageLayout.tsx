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
import { motion } from "framer-motion";

export const SingleWorkPageLayout = ({
  children,
  title,
  description,
  role,
  duration,
  industry,
  year,
  src,
  platform,
  liveSite,
  otherProjects,
  slug
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  role: string;
  duration: string;
  year: string;
  industry: string;
  src: string;
  platform: string;
  liveSite?: string;
  otherProjects?: any
  slug?: string
}) => {
  const { push } = useRouter();

  // const projects = otherProjects?.projects.filter((project: any) => (
  //   console.log(project)
  // ));
  
  
  // const nonActiveProjects = projects?.splice(0, 2);

  
  return (
    <div>
      {/* <CursorEffect /> */}
      <div className="bg-white pt-12 md:pt-0  md:pb-44">
        <div className="py-6 md:py-12" />
        <div className="max-w-[1050px] mx-auto px-4 lg:px-0">
          <div className=" py-9 md:py-14 lg:py-16 ">
            {/* <Reveal duration={0.6}> */}
            <GridTwoColsContainer>
              <div className="w-full">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium">
                  {title}
                </h1>
              </div>

              <div className="w-full ">
                <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
              </div>
            </GridTwoColsContainer>
            {/* </Reveal> */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="mt-9 md:mt-28 grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-12 md:"
            >
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-xs md:text-sm text-zinc-500 uppercase">
                  ROLE / SERVICES
                </h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {role}
                </p>
              </div>
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-xs md:text-sm text-zinc-500 uppercase">
                  INDUSTRY
                </h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {industry}
                </p>
              </div>
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-xs md:text-sm text-zinc-500 uppercase">
                  DURATION
                </h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {duration}
                </p>
              </div>
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-xs md:text-sm text-zinc-500 uppercase">
                  PLATFORM
                </h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {platform}
                </p>
              </div>
              <div className="space-y-2 md:space-y-5 divide-y inline-block">
                <h2 className="text-xs md:text-sm text-zinc-500 uppercase">
                  YEAR
                </h2>
                <p className="text-base md:text-lg text-back tracking-tighter pt-2 md:pt-5">
                  {year}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className=" mt-12"
          >
            <ProjectImagePreview src={src} liveSite={liveSite} />
          </motion.div>

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
              {otherProjects?.projects.map((project: any) => (
                <WorkProjectCard
                  key={project?.projectTitle}
                  link={project?.slug}
                  title={project?.projectTitle}
                  description={project?.description}
                  image={project?.introImage.url}
                  tags={project?.tags}
                />
              ))}
            </div>
          </div>
        </PageContainer>

        <Footer />
      </div>
    </div>
  );
};
