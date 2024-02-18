import {
  GridTwoColsContainer,
  Para,
  ProjectImagePreview,
  RoundedButton,
} from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPage/SingleWorkPageLayout";
import { SectionTitle } from "./SingleWorkPage/components/SectionTitle";
import Image from "next/image";

export const MoonlightIndex = () => {
  return (
    <SingleWorkPageLayout
      title="Moonlight"
      description="Moonlight is a dating app that connects people together. Its finds you a match based on compatibilities and similar interests. An App to have fun and find the one 😜"
      role="App Designing & Website"
      duration="5 Weeks"
      platform="IOS & Android App"
      year="2023"
      src="/images/moonlight/moon.png"
      // liveSite="https://rendlr.vercel.app/"
    >
      <div className="space-y-12">
        {/* =================================Problem Statement==================================== */}

        <GridTwoColsContainer className="">
          <SectionTitle title="Overview" />

          <div className="space-y-5">
            <Para>
              Moonlight app is meant to stand out as a competitor among popular
              dating apps out there. Our arm is to develop a platform with great
              user experience with great match algorithm for users to find the
              one they find very compatible with.
            </Para>

            <Para>
              <b>Research: </b>
              This understanding motivated me to perform a qualitative research
              on users with experience on similar apps like Tinder and Badoo to
              understand users behavior, motivation, and opinion. Based on the
              data gathered, I was able to find out how Moonlight can be improve
              to satisfy users need and wants.
            </Para>
          </div>
        </GridTwoColsContainer>

        {/* =================================Persona==================================== */}

        <GridTwoColsContainer className=" py-12 border-t">
          <SectionTitle title="Personas Thought" />

          <Para>
            Whats users have to say about their experiences on the apps and
            their insight on how Moonlight can do better.
          </Para>
        </GridTwoColsContainer>

        <Image
          src="/images/moonlight/personas.png"
          alt="john ifemezuo rendlr image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        <GridTwoColsContainer className="border-t py-12 md:py-20 mt-20">
          <SectionTitle title="Wireframe & User Flow" />

          <div className="space-y-5">
            <Para>
              Understanding users needs and behavior helped in creating a better
              wireframe and suitable flow for our users to take in other to
              achieve there goal on the app.
            </Para>
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/moonlight/moonlight-wireframe.png"
          alt="john ifemezuo rendlr image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================Goal==================================== */}

        <GridTwoColsContainer className="border-t py-12">
          <SectionTitle title="Onboarding" />
        </GridTwoColsContainer>

        <Image
          src="/images/moonlight/moonlight-onboarding.png"
          alt="john ifemezuo moonlight image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================Design Process==================================== */}

        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Sign up" />
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/moonlight/moonlight-signup.png"
          alt="john ifemezuo moonlight image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================Users==================================== */}

        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Find Match" />
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/moonlight/moonlight-match.png"
          alt="john ifemezuo moonlight image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================Video preview==================================== */}

        <div className="mt-12 md:mt-44 space-y-12 md:space-y-44">
          <div className="space-y-12 mt-20">
            <SectionTitle title="Onboarding flow" />

            <video className=" w-full" width="320" height="240" controls>
              <source src="/videos/moonlight-onboarding.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="space-y-12 mt-20">
            <SectionTitle title="Match Flow" />
            <video className=" w-full" width="320" height="240" controls>
              <source src="/videos/moonlight-preview.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* =================================Mock screen==================================== */}

        <div className="space-y-5 md:space-y-9 flex py-12 md:py-60 space-x-12 md:space-x-20">
          <Image
            src="/images/moonlight/mm1.png"
            alt="john ifemezuo moonlight image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
          <Image
            src="/images/moonlight/mm2.png"
            alt="john ifemezuo moonlight image"
            width={1300}
            className=" w-full h-full object-fill translate-y-60"
            height={900}
          />
          <Image
            src="/images/moonlight/mm3.png"
            alt="john ifemezuo moonlight image"
            width={1300}
            className=" w-full h-full object-fill translate-y-96"
            height={900}
          />
        </div>

        {/* =================================Mocks==================================== */}

        <div className="space-y-5 md:space-y-9 flex py-12 md:pt-60 space-x-12 md:space-x-20">
          <Image
            src="/images/moonlight/usermock.png"
            alt="john ifemezuo moonlight image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
          <Image
            src="/images/moonlight/mock1.png"
            alt="john ifemezuo moonlight image"
            width={1300}
            className=" w-full h-full object-fill "
            height={900}
          />
        </div>

        {/* ===================================================================== */}

        <div className="py-12 space-y-12">
          <SectionTitle title="All Screens" />

          <Image
            src="/images/moonlight/allscreens.png"
            alt="john ifemezuo moonlight image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
        </div>

        {/* =================================Final Design==================================== */}
        <div className=" mt-12 md:py-2 grid gap-5 justify-center align-middle md:gap-12 place-items-center">
          <h1 className="text-2xl md:text-5xl font-medium mt-12 md:mt-44  pb-20 md:pb-0 text-center">
            Marketing Website
          </h1>

          <RoundedButton link="https://www.moonlight.com/" />
        </div>

        <div className="pt-12">
          <Image
            src="/images/moonlight/moon2.png"
            alt="john ifemezuo rendlr image"
            width={1500}
            className=" w-full h-full object-fill "
            height={1200}
          />
        </div>
      </div>
    </SingleWorkPageLayout>
  );
};
