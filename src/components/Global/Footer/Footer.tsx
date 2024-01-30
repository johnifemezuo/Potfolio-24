import {
  ArrowRight,
  BehanceIcon,
  ContactForm,
  DribbbleIcon,
  FullWidthButton,
  LinkedInIcon,
  PageContainer,
  SocialCard,
  TwitterIcon,
} from "@/components";
import Link from "next/link";

export const Footer = () => {
  return (
    <PageContainer>
      <div  id="contact"></div>
      <FullWidthButton name="Lets Get in touch" />

      <div
        className="xl:flex xl:space-y-0 space-y-8 xl:space-x-6 mt-6 "
       
      >
        <div className="xl:w-[70%] grid grid-cols-2  gap-4 md:gap-6">
          <SocialCard
            name="Behance"
            link="/"
            icon={
              <BehanceIcon className=" text-white group-hover:text-zinc-700 duration-500" />
            }
          />
          <SocialCard
            name="Dribbble"
            link="/"
            icon={
              <DribbbleIcon className="text-white group-hover:text-zinc-700 duration-500" />
            }
          />
          <SocialCard
            name="LinkedIn"
            link="/behance"
            icon={
              <LinkedInIcon className="text-white group-hover:text-zinc-700 duration-500" />
            }
          />
          <SocialCard
            name="Twitter"
            link="/behance"
            icon={
              <TwitterIcon className="text-white group-hover:text-zinc-700 duration-500" />
            }
          />
        </div>

        <ContactForm />
      </div>

      {/* Footer */}
      <div className="font-light text-zinc-500 text-sm  md:flex--items justify-between w-full border-border-color mt-4 border text-center  md:text-lg lg:text-xl py-4 md:py-6 px-6 rounded-xl">
        <p>John Ifemezuo. All Right Reserved.</p>
        <p>©2023.</p>
      </div>

      <Link href="#top">
        <div className="group flex--items space-x-3 text-center justify-center mt-4 pl-8 pb-6">
          <ArrowRight className="w-6 lg:w-8 text-white" />
          <h1 className="font-light text-white md:text-zinc-500  group-hover:text-white text-base lg:text-2xl pt-1 group-hover:translate-x-5 transition-transform duration-500">
            Scroll back top
          </h1>
        </div>
      </Link>
    </PageContainer>
  );
};
