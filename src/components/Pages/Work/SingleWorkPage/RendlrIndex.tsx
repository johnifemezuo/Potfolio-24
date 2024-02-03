import { GridTwoColsContainer, ProjectImagePreview } from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPageLayout";

export const RendlrIndex = () => {
  return (
    <SingleWorkPageLayout
      title="Rendlr"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus reprehenderit possimus repellendus dignissimos
                  natus nemo perferendis, molestias ea voluptatum aliquam!"
      role="UI/UX Designer"
      duration="10 Months"
      year="2021"
      src="/images/me.png"
      liveSite="https://rendlr.vercel.app/"
    >
      <div className="space-y-12">
        <GridTwoColsContainer className="py-12">
          <h1 className="md:text-lg tracking-tighter uppercase">
            Introduction
          </h1>

          <p className="text-lg md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nihil itaque soluta commodi aut neque exercitationem sint voluptatem
            repellendus! Nam odit suscipit totam nostrum recusandae ducimus
            excepturi, ipsa eligendi exercitationem?
          </p>
        </GridTwoColsContainer>

        <ProjectImagePreview src="/images/me.png" />
      </div>
    </SingleWorkPageLayout>
  );
};
