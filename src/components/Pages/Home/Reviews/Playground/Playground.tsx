import {
  ExceptTwo,
  FullWidthButton,
  PageContainer,
  PlayGroundDesigns,
} from "@/components";

export const Playground = () => {
  return (
    <div>
      <PageContainer>
        <ExceptTwo />
        <FullWidthButton name="Playground" />
      </PageContainer>

      <div className=" overflow-x-hidden  lg:py-20 py-8 md:space-y-12 space-y-12">
        <div className="w-[1000px] overflow-x-auto lg:w-full flex lg:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          <PlayGroundDesigns img="/images/rendlr/presentation.png" />
          <PlayGroundDesigns img="/images/zigah/home.png" />
          <PlayGroundDesigns img="/images/zigah/drone.png" />
          <PlayGroundDesigns img="/images/zigah/Homepage.png" />
        </div>
        <div className="w-[1000px] overflow-x-auto lg:w-full flex lg:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12 ">
          <PlayGroundDesigns img="/images/zigah/ecommerce.png" />
          <PlayGroundDesigns img="/images/moonlight/moon.jpg" />
          <PlayGroundDesigns img="/images/zigah/zigah-mock.jpg" />
          <PlayGroundDesigns img="/images/moonlight/moon2.jpg" />
        </div>
      </div>
    </div>
  );
};
