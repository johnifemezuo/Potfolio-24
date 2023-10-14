import { ArrowDownIcon, ArrowRight, PageContainer } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const WorkSection = () => {
  const btnStyle =
    "border uppercase border-stone-300 text-xs lg:text-base 2xl:text-lg rounded-full px-4 py-2 md:px-6 md:py-3 text-stone-300 lg:text-base inline-block text-center font-medium";

  return (
    <div className="lg:pb-20">
      <PageContainer>
        <div className="space-y-6 xl:space-y-0 justify-between px-4 md:py-8 md:px-6 2xl:px-20 py-4 xl:px-12 xl:py-12 2xl:py-20 border border-border-color rounded-xl xl:flex items-center">
          <h1 className="text-2xl  md:text-5xl 2xl:text-[5rem] xl:text-[3rem] font-light text-white">
            What i do best
          </h1>

          <div className="xl:grid flex flex-wrap grid-cols-3 gap-3 lg:gap-5">
            <span className={btnStyle}>UI/UX design</span>
            <span className={btnStyle}>Web Developer</span>
            <span className={btnStyle}>Front end Engineer</span>
            <span className={btnStyle}>Mobile Developer</span>
          </div>
        </div>
      </PageContainer>

      <div className="w-full pb-12 xl:pb-20 overflow-x-hidden">
        <div className=" no-scrollbar w-[1900px] lg:w-[2700px] mt-14 xl:mt-44 flex space-x-8 md:space-x-12 overflow-x-auto px-3 xl:px-12">
          <div className="grid justify-end ">
            <h1 className="w-[200px] text-white lg:text-5xl md:text-3xl text-2xl xl:w-[300px]">
              How I can be of help
            </h1>

            <ArrowRight className="w-[50px] md:w-[68px] md:h-[68px] lg:w-[180px] lg:h-[180px" />
          </div>

          {/* card 1 */}
          <div className="space-x-6 relative bg-[#1D1C1C] p-6 lg:p-14 rounded-3xl flex w-[500px] lg:w-[750px]">
            <div className="w-[400px] lg:w-[550px] grid justify-center text-center  ">
              <Image
                src="/images/d.png"
                className="mx-auto rounded-full lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] object-cover"
                alt="uiux"
                width={200}
                height={200}
              />

              <h1 className="text-white text-lg lg:text-[3rem] mt-12">Designer</h1>
            </div>

            <div>
              <p className="text-white text-sm md:text-base lg:text-lg">
                DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND INTO A
                VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE PRESENCE.
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl absolute right-5 lg:right-10 bottom-5 lg:bottom-10 text-stone-400  lg:text-5xl font-medium ">
              01
            </h1>
          </div>

          {/* card 2 */}
          <div className="w-[450px] lg:w-[800px] relative bg-white p-6 lg:p-14 rounded-3xl flex space-x-4 lg:space-x-12">
            <div className="w-[400px]  lg:w-[550px] grid justify-center text-center  ">
              <Image
                src="/images/webss.jpg"
                className="mx-auto rounded-full lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] object-cover"
                alt="uiux"
                width={200}
                height={200}
              />

              <h1 className=" md:text-base text-lg text-stone-800 lg:text-[3rem] mt-12">
                Development
              </h1>
            </div>

            <div>
              <p className="text-stone-700  text-sm md:text-base lg:text-lg">
                DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND INTO A
                VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE PRESENCE.
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-[3rem] absolute right-5 lg:right-10 bottom-5 lg:bottom-10 text-stone-600  lg:text-5xl font-medium ">
              02
            </h1>
          </div>

          {/* card 3 */}

          <div className="w-[450px] lg:w-[750px] relative bg-[#BED5E5] p-6 lg:p-14 rounded-3xl flex space-x-5 lg:space-x-12">
            <div className="mx-auto w-[400px] lg:w-[750px] grid justify-center text-center  ">
              <Image
                src="/images/webss.jpg"
                className="rounded-full lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] object-cover"
                alt="uiux"
                width={200}
                height={200}
              />

              <h1 className="text-lg text-stone-800 lg:text-[3rem] mt-12">Mobile</h1>
            </div>

            <div>
              <p className="text-stone-700 text-sm md:text-sm lg:text-lg">
                DESIGN SERVICES ARE FOCUSED ON TRANSFORMING THE ESSENCE OF YOUR BRAND INTO A
                VISUALLY APPEALING AND INTUITIVELY UNDERSTANDABLE ONLINE PRESENCE.
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl bottom-5 lg:text-[3rem] absolute lg:right-10 lg:bottom-10 right-5 text-stone-600  lg:text-5xl font-medium ">
              03
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};
