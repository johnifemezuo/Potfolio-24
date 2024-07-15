import {
  ExceptTwo,
  FullWidthButton,
  PageContainer,
  PlayGroundDesigns,
} from "@/components";

export const Playground = () => {
  return (
    <div>
      <h2 className="text-white text-center text-xl lg:text-3xl lg:text-5xl pt-12">
        Dribble Shots
      </h2>

      <div className=" overflow-x-hidden  slider lg:py-20 py-8 md:space-y-12 space-y-12">
        <div className="slide-track w-full overflow-hidden lg:w-full flex-items md:gap-12">
          <PlayGroundDesigns img="/images/rendlr/presentation.png" />
          <PlayGroundDesigns img="/images/zigah/home.png" />
          <PlayGroundDesigns img="/images/zigah/drone.png" />
          <PlayGroundDesigns img="/images/zigah/Homepage.png" />
          <PlayGroundDesigns img="/images/zigah/ecommerce.png" />
          <PlayGroundDesigns img="/images/moonlight/moon.jpg" />
          <PlayGroundDesigns img="/images/zigah/zigah-mock.jpg" />
          <PlayGroundDesigns img="/images/moonlight/moon2.jpg" />
        </div>
      </div>
      
    </div>
  );
};
