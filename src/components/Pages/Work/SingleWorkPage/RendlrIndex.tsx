import {
  GridTwoColsContainer,
  Para,
  ProjectImagePreview,
  RoundedButton,
} from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPageLayout";
import { SectionTitle } from "./components/SectionTitle";
import Image from "next/image";

export const RendlrIndex = () => {
  return (
    <SingleWorkPageLayout
      title="Rendlr"
      description="Rendlr is a social network that empowers you to make connections,
      whether you’re looking for friends, dating, or here to have fun. Its
      an online dating app that allows you to match with people with
      similar interest and goals."
      role="UI/UX Designer"
      duration="4 Weeks"
      platform="IOS & Android App"
      year="2023"
      src="/images/rendlr/Thumbnail.png"
      liveSite="https://rendlr.vercel.app/"
    >
      <div className="space-y-12">
        {/* =================================Problem Statement==================================== */}

        <GridTwoColsContainer className="">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Problem Statement" />

            <Image
              src={"/images/rendlr/question-image.png"}
              width={200}
              height={200}
              alt="rendlr problem"
            />
          </div>

          <div className="space-y-5">
            <Para>
              <b className="text-x">1.</b> Users may lose interest or motivation
              using apps like tinder, baboo and many others if they do not
              receive enough matches, responses, or dates. How can the app
              increase user engagement and retention by providing more
              incentives, feedback, and guidance?
            </Para>
            <Para>
              <b className="text-x">2.</b> How can we improve our users
              experience by designing a seamless flow for users to navigate the
              app with ease.
            </Para>
            <Para>
              <b className="text-x">2.</b> How can our users Earn while having
              fun.
            </Para>
          </div>
        </GridTwoColsContainer>

        {/* =================================Goal==================================== */}

        <GridTwoColsContainer className="py-8 border-t md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="The Goal" />
          </div>

          <div className="space-y-5 md:space-y-8">
            <Para>
              <b className="text-x">1.</b> Design an intuitive experience for
              ours users to easily navigate find potential matches of people
              with like minds and interest.
            </Para>
            {/* <Para>
              <b className="text-x">2.</b> Design a seamless experience for
              users who choose to simulate an in app dating experience similar
              to a physical meetups.
            </Para> */}
            <Para>
              <b className="text-x">2.</b> Give users the ability to gift other
              users whose picture they like. User purchases a coin by funding
              there account and use the coins they purchase to gift others
              users.
            </Para>
            <Para>
              <b className="text-x">3.</b>A checkout flow of how users can cash
              out their accumulated gifts(coins).
            </Para>
          </div>
        </GridTwoColsContainer>

        {/* =================================Design Process==================================== */}

        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="My Design Process" />
          </div>

          <div className="space-y-5">
            <Para>
              In order to achieve our definite goals, I first started by
              deploying my design process that will get me to the final
              destination.
            </Para>
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/rendlr/design-process.png"
          alt="john ifemezuo rendlr image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================Users==================================== */}

        <GridTwoColsContainer className="py-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Our Users" />
          </div>

          <div className=" space-x-4 flex-wrap flex md:space-x-6">
            <Image
              src={"/images/rendlr/user1.png"}
              width={200}
              height={200}
              alt="rendlr problem"
              className="rounded-full md:w-[200px] md:h-[200px] border-8 border-zinc-100 h-[120px] w-[120px] object-cover"
            />
            <Image
              src={"/images/rendlr/user2.png"}
              width={200}
              height={200}
              alt="rendlr problem"
              className="rounded-full md:w-[300px] md:h-[300px] border-8 border-zinc-100 h-[120px] w-[120px] object-cover"
            />
            <Image
              src={"/images/rendlr/user3.png"}
              width={200}
              height={200}
              alt="rendlr problem"
              className="rounded-full md:w-[200px] md:h-[200px] border-8 border-zinc-100 h-[120px] w-[120px] object-cover"
            />
          </div>
        </GridTwoColsContainer>

        {/* =================================Persona==================================== */}

        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="User Persona" />
          </div>

          <div className="space-y-5">
            <Para>
              During research, I did a competitive analysis on competitors like
              Tinder, Badoo, Bumble and many more. I also conducted qualitative
              research to better understand our users motivation, needs and
              opinions. This research enabled me to understand our users better
              in other to design a great experience for them.
            </Para>
          </div>
        </GridTwoColsContainer>
        <Image
          src="/images/rendlr/persona.png"
          alt="john ifemezuo rendlr image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================User Flow==================================== */}

        <GridTwoColsContainer className=" pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="User Flow" />
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/rendlr/user-flow.png"
          alt="john ifemezuo rendlr image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1000}
        />

        {/* =================================Wire frame==================================== */}

        <GridTwoColsContainer className=" pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Wireframes" />
          </div>
        </GridTwoColsContainer>

        <ProjectImagePreview src="/images/rendlr/wireframe.png" />

        {/* =================================Assets==================================== */}

        <GridTwoColsContainer className=" pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Assets" />
          </div>
          <div className="space-y-5">
            <Para>
              <b className="text-zinc-800">Color -</b> Pink is often associated
              with love, romance, and passion, making it an ideal choice for the
              app where users are looking for connections and relationships. The
              bright and bold nature can help attract users&apos; attention and
              make the app visually appealing, increasing engagement. Pink is a
              color that can appeal to both men and women, making it a versatile
              choice for a dating app that caters to a diverse audience.
            </Para>
            <Para>
              <b className=" text-zinc-800">Font - </b> Mulish is a modern
              sans-serif font with clean lines and a sleek appearance, making it
              a stylish choice for the app that wants to convey a sense of
              sophistication.
            </Para>
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/rendlr/asserts.png"
          alt="john ifemezuo rendlr image"
          width={1200}
          className=" w-full h-full object-fill"
          height={1500}
        />
        {/* =================================Final Design==================================== */}

        <GridTwoColsContainer className=" pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Final Designs" />
          </div>

          <Para>
            The screens were designed in pleasant, soft tones. It was
            intentionally kept simple to make it enjoyable and easy for users to
            absorb information on the screens.
          </Para>
        </GridTwoColsContainer>

        <div className="space-y-5 md:space-y-9">
          <Image
            src="/images/rendlr/fd1.png"
            alt="john ifemezuo rendlr image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
          <Image
            src="/images/rendlr/fd2.png"
            alt="john ifemezuo rendlr image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
          <Image
            src="/images/rendlr/fd3.png"
            alt="john ifemezuo rendlr image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
          <Image
            src="/images/rendlr/morefd.png"
            alt="john ifemezuo rendlr image"
            width={1500}
            className=" w-full h-full object-fill"
            height={1900}
          />

          <Image
            src="/images/rendlr/rendlr-figma.png"
            alt="john ifemezuo rendlr image"
            width={1300}
            className=" w-full h-full object-fill"
            height={900}
          />
        </div>

        {/* <div>
        <iframe className="border border-[rgba(0, 0, 0, 0.1)];" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FiP4X6vaFkWmMNdVL45FLm0%2FDating-App%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D164-2654%26viewport%3D404%252C-874%252C0.15%26t%3DlAzwtqpKwHCx1qjQ-1%26scaling%3Dscale-down%26starting-point-node-id%3D299%253A3840%26mode%3Ddesign" allowfullscreen></iframe>
        </div> */}

        <div className="gap-8 md:gap-12 grid">
          <video className=" w-full" width="320" height="240" controls>
            <source src="/videos/rendlr-intro.mp4" type="video/mp4" />
          </video>

          <video className=" w-full" width="320" height="240" controls>
            <source src="/videos/rendlr-preview.mp4" type="video/mp4" />
          </video>
        </div>

        {/* =================================Final Design==================================== */}
        <div className=" pt-12 md:pt-20 grid gap-5 justify-center align-middle  md:gap-12 place-items-center">
          <h1 className="text-2xl md:text-5xl font-medium mt-12 md:mt-44  pb-20 md:pb-0 text-center">
            Marketing Website
          </h1>

          <RoundedButton link="https://www.rendlr.com/" />
        </div>

        <GridTwoColsContainer className=" pt-12 md:pt-20">
          <h1 className="text-2xl md:text-6xl font-semibold mt-12 md:mt-44  pb-20 md:pb-0">
            Mockups
          </h1>

          <Image
            src="/images/rendlr/isoiphone.png"
            alt="john ifemezuo rendlr image"
            width={1500}
            className=" w-full h-full object-fill translate-x-44 md:translate-x-0 -translate-y-20 md:translate-y-0"
            height={1200}
          />

          <div className="md:-translate-y-56 -translate-y-44 md:mt-0">
            <Image
              src="/images/rendlr/isoiphone2.png"
              alt="john ifemezuo rendlr image"
              width={1500}
              className=" w-full h-full object-fill "
              height={1200}
            />
          </div>
        </GridTwoColsContainer>

        <div className="mt-12">
          {" "}
          <Image
            src="/images/rendlr/thanks.png"
            alt="john ifemezuo rendlr image"
            width={1500}
            className=" w-full h-full object-fill -translate-y-56"
            height={1200}
          />
        </div>
      </div>
    </SingleWorkPageLayout>
  );
};
