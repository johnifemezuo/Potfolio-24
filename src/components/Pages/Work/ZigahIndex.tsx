import {
  GridTwoColsContainer,
  Para,
  ProjectImagePreview,
  RoundedButton,
} from "@/components";
import { SingleWorkPageLayout } from "./SingleWorkPage/SingleWorkPageLayout";
import { SectionTitle } from "./SingleWorkPage/components/SectionTitle";
import Image from "next/image";

export const ZigahIndex = () => {
  return (
    <SingleWorkPageLayout
      title="Zigah"
      description="ZIGAH makes it easy for individuals and businesses to make fast, secure, convenient and seamless International payments in minutes. Unlock boundless possibilities with Zigah, your global money transfer solution.

      "
      role="Front end Developer"
      duration="From 2022 to 2024"
      platform="Website & Web Application"
      year="2023"
      src="/images/zigah/zigah-intro.png"
      liveSite="https://zigah.co/"
    >
      <div className="space-y-12">
        {/* =================================Problem Statement==================================== */}

        <GridTwoColsContainer className="">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="About Zigah" />
          </div>

          <div className="space-y-5">
            <Para>
              ZIGAH makes it easy for individuals and businesses to make fast,
              secure, convenient and seamless International payments in minutes.
              Unlock boundless possibilities with Zigah, your global money
              transfer solution. With Zigah, you can seamlessly send money
              across borders to family members, friends, business partners,
              suppliers, vendors, universities, colleges etc.
            </Para>
          </div>
        </GridTwoColsContainer>

        {/* =================================Goal==================================== */}

        <GridTwoColsContainer className="py-8 border-t md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Highlights" />
          </div>

          <div className="space-y-5 md:space-y-8">
            <Para>
              <b className="text-x">1.</b> I optimized website performance by
              implementing lazy loading techniques and code splitting, resulting
              in a 30% decrease in page load times and improved overall user
              engagement.
            </Para>

            <Para>
              <b className="text-x">2.</b>I developed and implemented a new user
              authentication flow using next.js and Zustand(State management),
              improving security and user experience for our active users.
            </Para>

            <Para>
              <b className="text-x">3.</b> Collaborated with the design team to
              create a responsive dashboard interface for financial data
              visualization, utilizing HTML, CSS, and some data visualization
              libraries to present complex data in an intuitive and
              user-friendly manner.
            </Para>

            <Para>
              <b className="text-x">4.</b> Joined a cross-functional team to
              develop and consume the endpoint (RestAPI) from a third-party
              payment gateway API built by the backend team, enabling seamless
              transactions and enhancing the platform&apos;s functionality for
              both customers and Admins.
            </Para>

            <Para>
              <b className="text-x">4.</b>I architectured and developed Zigah
              administrative dashboard interface, seamlessly integrating with
              API endpoints to streamline user dashboard management
              functionalities and infrastructure requirements.
            </Para>
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/zigah/zigah-landing.png"
          alt="john ifemezuo Zigah image"
          width={1500}
          className=" w-full h-full object-fill "
          height={1200}
        />

        {/* =================================Design Process================================== */}

        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Tech Stacks" />
          </div>

          <div className="space-y-5">
            <Para>Nextjs,</Para>
            <Para>Rest Api,</Para>
            <Para>Graph Api,</Para>
            <Para>Keycloak,</Para>
            <Para>
              Framer motion (Website animation and dashboard transitions),
            </Para>
          </div>
        </GridTwoColsContainer>

        {/* =================================Final Design==================================== */}

        <GridTwoColsContainer className="py-8 border-t md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Challenges" />
          </div>

          <div className="space-y-5 md:space-y-8">
            <Para>
              As the front end engineer I often face the challenge of ensuring
              that user data is secure and compliant with industry regulations
              such as GDPR(General data protection Regulations).This involved
              implementing robust security measures, encryption protocols, and
              access controls to protect sensitive information.
            </Para>

            <Para>
              <b className="text-x">2.</b>As our company deals with large amount
              of data that requires complex calculations which can impact
              performance if not done properly.I had to optimize code, implement
              caching strategies, and utilize efficient algorithms to ensure
              fast loading times and smooth user experience.
            </Para>
          </div>
        </GridTwoColsContainer>

        <Image
          src="/images/zigah/zigah-landing.png"
          alt="john ifemezuo Zigah image"
          width={1500}
          className=" w-full h-full object-fill "
          height={1200}
        />

        {/* =================================Design Process================================== */}

        <GridTwoColsContainer className=" border-t pt-12 md:pt-20">
          <div className="grid gap-5 md:gap-12">
            <SectionTitle title="Tech Stacks" />
          </div>

          <div className="space-y-5">
            <Para>Nextjs,</Para>
            <Para>Rest Api,</Para>
            <Para>Graph Api,</Para>
            <Para>Keycloak,</Para>
            <Para>
              Framer motion (Website animation and dashboard transitions),
            </Para>
          </div>
        </GridTwoColsContainer>

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
