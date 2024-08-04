/* eslint-disable @next/next/no-img-element */
import { Para, RoundedButton, ScrollReveal } from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPage/SingleWorkPageLayout";
import { SectionTitle } from "./SingleWorkPage/components/SectionTitle";
import parse from "html-react-parser";

export const ProjectDetails = ({ content, otherProjects }: any) => {
  const project = content?.[0] ?? {};
  console.log(project)
  const projectContent = project?.content?.html || "";

  return (
    <SingleWorkPageLayout
      title={project?.projectTitle}
      description={project?.description}
      role={project?.role}
      duration={project?.duration}
      platform={project?.platform}
      year={project?.year}
      industry={project?.industry}
      src={project?.introImage?.url}
      liveSite={project?.livesite}
      slug={project?.slug}
      otherProjects={otherProjects}
    >
      <div className="space-y-12">
        {/* ====================Section One========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            <SectionTitle title={project?.title1} />

            <Para>{project?.description1}</Para>
          </div>

          <img
            src={project?.image1?.url}
            alt={project?.title1}
            className=" w-full h-full object-fill lg:mt-12 mt-8"
          />
        </ScrollReveal> */}

        {/* ====================Section Two========================= */}

        <ScrollReveal>
          {/* <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title2 && <SectionTitle title={project?.title2} />}

            {project?.description2 && <Para>{project?.description2}</Para>}
          </div>

          {project?.image2?.url && (
            <img
              src={project?.image2?.url}
              alt={project?.title2}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )} */}
          <section className="pageStyle">{parse(projectContent)}</section>
        </ScrollReveal>

        {/* ====================Section Three========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title3 && <SectionTitle title={project?.title3} />}

            {project?.description3 && <Para>{project?.description3}</Para>}
          </div>

          {project?.image3?.url && (
            <img
              src={project?.image3?.url}
              alt={project?.title3}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* ====================Section Four========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title4 && <SectionTitle title={project?.title4} />}

            {project?.description4 && <Para>{project?.description4}</Para>}
          </div>

          {project?.image4?.url && (
            <img
              src={project?.image4?.url}
              alt={project?.title4}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* ====================Section Five========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title5 && <SectionTitle title={project?.title5} />}

            {project?.description5 && <Para>{project?.description5}</Para>}
          </div>

          {project?.image5?.url && (
            <img
              src={project?.image5?.url}
              alt={project?.title5}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* ====================Section Six========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title6 && <SectionTitle title={project?.title6} />}

            {project?.description6 && <Para>{project?.description6}</Para>}
          </div>

          {project?.image6?.url && (
            <img
              src={project?.image6?.url}
              alt={project?.title6}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* ====================Section Seven========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title7 && <SectionTitle title={project?.title7} />}

            {project?.description7 && <Para>{project?.description7}</Para>}
          </div>

          {project?.image7?.url && (
            <img
              src={project?.image7?.url}
              alt={project?.title7}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* ====================Section Three========================= */}

        {/* <ScrollReveal>
          <div className="grid gap-5 md:gap-12 lg:grid-cols-2">
            {project?.title8 && <SectionTitle title={project?.title8} />}

            {project?.description8 && <Para>{project?.description8}</Para>}
          </div>

          {project?.image8?.url && (
            <img
              src={project?.image8?.url}
              alt={project?.title8}
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* <ScrollReveal>
          {project?.media1?.url && (
            <img
              src={project?.media1?.url}
              alt="growthlobby project"
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* <ScrollReveal>
          {project?.media2?.url && (
            <img
              src={project?.media2?.url}
              alt="growthlobby project"
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* <ScrollReveal>
          {project?.media3?.url && (
            <img
              src={project?.media3?.url}
              alt="growthlobby project"
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* <ScrollReveal>
          {project?.media4?.url && (
            <img
              src={project?.media4?.url}
              alt="growthlobby project"
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {/* <ScrollReveal>
          {project?.media5?.url && (
            <img
              src={project?.media5?.url}
              alt="growthlobby project"
              className=" w-full h-full object-fill lg:mt-12 mt-8"
            />
          )}
        </ScrollReveal> */}

        {project?.livesite && (
          <div className=" pt-12 md:pt-20 grid gap-5 justify-center align-middle  md:gap-12 place-items-center">
            <h1 className="text-2xl md:text-5xl font-medium mt-12 md:mt-44  pb-20 md:pb-0 text-center">
              Visit Site {project?.projectTitle}
            </h1>

            <RoundedButton link={project?.livesite} />
          </div>
        )}
      </div>
    </SingleWorkPageLayout>
  );
};
