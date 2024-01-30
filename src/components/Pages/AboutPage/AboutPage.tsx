import {
  ArrowRight,
  DesignStepCard,
  PageContainer,
  RoundedArt,
} from "@/components";
import Image from "next/image";
import { WorkTimeLine } from "./WorkTimeLine";

export const AboutPage = () => {
  return (
    <PageContainer>
      <div className="relative mb-12 md:mb-20 rounded-xl border border-[#312F2F] h-[70vh] md:h-[70vh] lg:h-[86vh] xl:h-[100vh] py-8 md:py-14 md:p-8 md:px-3 lg:12 xl:px-12">
        <div className="flex space-x-4 items-center md:space-x-12 ml-6 m md:-mt-12 mb-4">
          <ArrowRight className="text-white items-center h-8 md:h-14 w-8 md:w-14 -mt-12" />

          <h1 className="flex space-x-3 ">
            <span className="text-white text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[10rem] md:text-[6rem]">
              I`m
            </span>{" "}
            <span className="text-stone-500  text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[10rem] md:text-[6rem]">
              John
            </span>
          </h1>
        </div>

        <div className="md:flex space-x-4 md:space-x-44 space-y-4">
          <div className="mx-auto md:mx-0 bg-red-100 w-[130px] rounded-full h-[130px] lg:w-[540px] md:w-[610px]  md:h-[310px] lg:h-[380px] overflow-hidden">
            <Image
              src="/images/me.png"
              alt="me"
              width={500}
              className="object-cover w-full h-full"
              height={700}
            />
          </div>

          <div className="w-full  ">
            <div className="flex--items space-x-4 md:space-x-12">
              <div className="flex items-center space-x-3">
                <span>
                  <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
                </span>

                <div className="space-y-3">
                  <h3 className="text-2xl text-white md:text-3xl xl:text-5xl">
                    <span>Desi</span>
                    <span className="text-stone-500">gner</span>
                  </h3>
                </div>
              </div>

              <div className="flex space-x-3 items-center">
                <span>
                  <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
                </span>

                <div className="space-y-3">
                  <h3 className="text-2xl text-white md:text-3xl xl:text-5xl">
                    <span>Deve</span>
                    <span className="text-stone-500">loper</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="pt-0 md:pt-12">
              <p className="text-zinc-500 tracking-tighter  text-2xl md:text-3xl lg:text-4xl py-6 xl:space-y-8 xl:text-6xl leading-8 md:leading-10">
                I enjoy creating new visions and trying{" "}
                <span className="text-white">different visual techniques.</span>{" "}
                Therefore, you can find many experiments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-6">
          <p className="text-zinc-500 tracking-tighter text-2xl md:text-3xl lg:text-4xl py-0 md:py-12 xl:space-y-8 xl:text-5xl leading-8 md:leading-10">
            I find the
            <span className="text-white">balance between art and</span>{" "}
            functionality and strive to incorporate this vision into each of my
            projects.{" "}
            <span className="text-white">
              As a result, my work captivates both my clients
            </span>{" "}
            and their users, evoking a sense of awe and excitement.
          </p>
        </div>

        {/*================ Design Steps =================== */}
        <div className="py-8 md:py-20">
          <p className="text-zinc-200 tracking-tighter  min-w-[200px]  text-3xl md:text-3xl lg:text-4xl pb-6 xl:space-y-8 xl:text-7xl leading-10">
            My Design process.
          </p>

          <div className="gap-3  flex flex-wrap">
            <DesignStepCard
            num="01"
              title="Project brief & Ideation"
              description="Understanding problem statement and idea generation."
            />
            <DesignStepCard
            num="02"
              title="Research"
              description="User Research, Competitive Research, User Persona. User Flow..."
            />
            <DesignStepCard
            num="03"
              title="Design and Prototype"
              description="Designing highly Aesthetically pleasing and useable interface and prototyping for simulation."
            />
            <DesignStepCard
            num="04"

              title="User Testing"
              description="Testing with users. Modify and iterate user feedback into design."
            />
            <DesignStepCard
            num="05"

              title="Development"
              description="Develop the user interface with recent and standard Front end frames like Nextjs, Reactjs or ReactNative."
            />
            <DesignStepCard
            num="06"
              title="Client/Hand Off"
              description="Project is deployed or handed over."
            />
          </div>
        </div>

        {/*================ Brands i worked with =================== */}

        <div className="py-8 md:py-20 md:mb-28 mb-12">
          <p className="text-zinc-200 tracking-tighter  min-w-[200px]  text-3xl md:text-3xl lg:text-4xl pb-6 xl:space-y-8 xl:text-7xl leading-10">
            Brands I have worked with & <br /> Experiences.
          </p>

          <div>
            <WorkTimeLine
              company="Zigah.co"
              role="Front end Engineer"
              year="2022 - 2024"
              image="/images/proj2.png"
            />
            <WorkTimeLine
              company="Ventlio"
              role="UI/UX Designer"
              year="2021 - 2024"
              image="/images/proj1.png"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
