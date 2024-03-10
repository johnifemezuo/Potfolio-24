import {
  GridTwoColsContainer,
  Para,
  ProjectImagePreview,
  RoundedButton,
  ScrollReveal,
} from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPage/SingleWorkPageLayout";
import { SectionTitle } from "./SingleWorkPage/components/SectionTitle";
import Image from "next/image";

export const ZigahNewSiteIndex = () => {
  return (
    <SingleWorkPageLayout
      title="Zigah Redesign"
      description="Zigah takes on a new outlook for international payments. 

      "
      role="Front end Developer"
      duration="1 Week"
      platform="Website"
      year="2023"
      src="/images/zigah-new/zigah-new.png"
      liveSite="https://zigah.vercel.app/"
    >
      <div className="space-y-12">
        {/* =================================Problem Statement==================================== */}

        <GridTwoColsContainer className="">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="About Project" />
          </div>

          <div className="space-y-5">
            <Para>
              As a designer and developer driven my passion for improving
              product usability and accessibility, I decided to redesign and
              build the latest version of Zigah. It was a concept i presented
              and approved but yet to be launched.
            </Para>
          </div>
        </GridTwoColsContainer>

        {/* =================================Goal==================================== */}

        <GridTwoColsContainer className="py-8 border-t md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="My process" />
          </div>

          <div className="space-y-5 md:space-y-8">
            <Para>
              I observed that the old zigah landing page has some
              inconsistencies in the design and lacks information hierarchy that
              should help visitors understand what Zigah is all about.
            </Para>

            <Para>
              I Proceeded to research on a better UX for the website by
              conducting competitor research and design research. In order to
              improve the already existing design, The new design has to be more
              user friendly and has better information hierarchy and a trendy
              look and feel for modern websites.
            </Para>

            <Para>
              I proceeded to develop the site using Nextjs framework to build
              the UI and TailwindCSS to styling. I use Gsap(Green sock Animation
              platform) to add some animation to the site in other to enhance
              the user experience. I equally manage the content of the site
              using GraphCMS (graph API).
            </Para>
          </div>
        </GridTwoColsContainer>

        <ScrollReveal>
          <div className="grid gap-5 md:gap-12 pb-4 md:pb-8">
            <SectionTitle title="Old Design" />
          </div>
          <Image
            src="/images/zigah/zigah-landing.png"
            alt="john ifemezuo Zigah image"
            width={1500}
            className=" w-full h-full object-fill "
            height={1200}
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-5 md:gap-12 pb-4 md:pb-8">
            <SectionTitle title="New Design Layout " />
          </div>
          <Image
            src="/images/zigah-new/zigah-new-layout2.png"
            alt="john ifemezuo Zigah new design image"
            width={1500}
            className=" w-full h-full object-fill "
            height={1200}
          />
        </ScrollReveal>

        {/* =================================Design Process================================== */}
        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12 pb-4 md:pb-8 ">
            <SectionTitle title="Tech Stacks & Technology" />
          </div>

          <div className="space-y-5">
            <Para>Nextjs,</Para>
            <Para>TailwindCss</Para>
            <Para>GSAP</Para>

            <Para>Graph Api,</Para>
            <Para>GraphCMS,</Para>
          </div>
        </GridTwoColsContainer>

        <ScrollReveal>
          <div className="grid gap-5 md:gap-12 pb-4 md:pb-8">
            <SectionTitle title="Desktop Designs " />
          </div>
          <Image
            src="/images/zigah-new/zigah-new-desktop-site.png"
            alt="john ifemezuo Zigah new design image"
            width={1500}
            className=" w-full h-full object-fill "
            height={1200}
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-5 md:gap-12 pb-4 md:pb-8">
            <SectionTitle title="Mobile Design" />
          </div>
          <Image
            src="/images/zigah-new/zigah-new-mobile-site.png"
            alt="john ifemezuo Zigah new design image"
            width={1500}
            className=" w-full h-full object-fill "
            height={1200}
          />
        </ScrollReveal>

        {/* =================================Final Design==================================== */}

        <div className=" pt-12 md:pt-20 grid gap-5 justify-center align-middle  md:gap-12 place-items-center">
          <h1 className="text-2xl md:text-5xl font-medium mt-12 md:mt-44  pb-20 md:pb-0 text-center">
            Visit Zigah App
          </h1>

          <RoundedButton link="https://app.zigah.co/auth/login" />
        </div>

        <div className="mt-12 pb-20">
          <Image
            src="/images/zigah/zigah-userdashboard.png"
            alt="john ifemezuo Zigah image"
            width={1500}
            className=" w-full h-full object-fill"
            height={1200}
          />
        </div>
      </div>
    </SingleWorkPageLayout>
  );
};
