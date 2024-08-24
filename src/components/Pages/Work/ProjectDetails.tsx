/* eslint-disable @next/next/no-img-element */
import { Para, RoundedButton, ScrollReveal } from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPage/SingleWorkPageLayout";
import { SectionTitle } from "./SingleWorkPage/components/SectionTitle";
import parse from "html-react-parser";

export const ProjectDetails = ({ content, otherProjects }: any) => {
  const project = content?.[0] ?? {};
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

        <ScrollReveal>
          <section className="pageStyle text-base">{parse(projectContent)}</section>
        </ScrollReveal>


        { project?.livesite && (
          <div className=" pt-12 md:pt-20 grid gap-5 justify-center align-middle  md:gap-12 place-items-center">
            <h1 className="text-2xl md:text-5xl font-medium mt-12 md:mt-44  pb-20 md:pb-0 text-center">
              Visit Site 
            </h1>

            <RoundedButton link={project?.livesite} />
          </div>
        )}
      </div>
    </SingleWorkPageLayout>
  );
};
