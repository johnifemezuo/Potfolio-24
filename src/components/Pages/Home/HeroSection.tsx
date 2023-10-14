import { ArrowDownIcon, ArrowRight, HeroRoundedArt, PageContainer, RoundedArt } from "@/components";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <PageContainer>
      <div
        id="top"
        className="relative rounded-xl border border-[#312F2F] h-[90vh] py-20 md:py-14 md:p-8 px-3 lg:12 xl:px-20
      "
      >
        <div className="lg:-space-y-6 md:-space-y-6">
          <h1 className="flex space-x-3 ">
            <span className="text-white text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[10rem] md:text-[6rem]">
              I`m
            </span>{" "}
            <span className="text-stone-500  text-[3rem] sm:text-[4rem] lg:text-[8rem] xl:text-[10rem] md:text-[6rem]">
              John
            </span>
          </h1>
          <div
            className="flex--items space-x-4 md:space-x-6
          "
          >
            <div className="rounded-full w-[66px] h-[66px] lg:w-[180px] md:w-[110px] md:h-[110px] lg:h-[180px] overflow-hidden">
              <Image src="/images/me.png" alt="me" width={200} height={200} />
            </div>
            <h1 className=" text-white md:text-[6rem] text-[3rem] sm:text-[4rem] lg:text-[9rem] xl:text-[rem]">
              Ifemezuo
            </h1>
          </div>
        </div>

        <div className="mt-12 md:mt-20 lg:space-x-[15%]  lg:flex">
          <div className=" justify-center  lg:inline-block text-center hidden">
            <p className="uppercase w-[127px] text-lg font-light  mb-6 text-stone-400">
              Scroll down
            </p>

            <ArrowRight className="text-white items-center ml-8" />
          </div>

          <div className="md:flex lg:max-w-[900px] justify-between mx-auto md:space-x-6 space-y-8 md:space-y-0">
            <div className="flex space-x-3">
              <span>
                <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
              </span>
              <div className="space-y-3">
                <h3 className="text-2xl text-white md:text-3xl xl:text-4xl">
                  <span>Desi</span>
                  <span className="text-stone-500">gner</span>
                </h3>
                <p className=" md:text-lg text-white font-light">
                  I`am a independent digital designer and webflow expert.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <span>
                <RoundedArt className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]" />
              </span>
              <div className="space-y-3">
                <h3 className="text-2xl text-white md:text-3xl xl:text-4xl">
                  <span>Deve</span>
                  <span className="text-stone-500">Loper</span>
                </h3>
                <p className=" md:text-lg text-white font-light">
                  I`am a independent digital designer and webflow expert.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:hidden">
          <div className="mx-auto border-border-color justify-center w-[78px] h-[78px] grid border rounded-full place-content-center text-center ">
            {/* <p className="uppercase text-lg font-light  mb-6 text-stone-400">Scroll down</p> */}

            <ArrowDownIcon className="text-white w-20 items-center" />
          </div>
        </div>

        {/* Art */}
        <div className="absolute md:top-12 lg:top-24 md:right-12 lg:right-24 top-6 right-6">
          <HeroRoundedArt className="xl:w-[500px] lg:w-[370px] lg:h-[370px] xl:h-[500px] w-[200px] h-[200px] md:w-[200px] md:h-[200px]" />
        </div>
        <div className="rounded-linear absolute bg-[#98843A] top-0 right-0 border w-[300px] h-[300px]"></div>
      </div>
    </PageContainer>
  );
};
