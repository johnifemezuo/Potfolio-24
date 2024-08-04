import { PlayGroundDesigns } from "@/components";

export const Playground = ({ dribbleShots }: any) => {

  return (
    <div>
      <h2 className="text-white text-center text-xl lg:text-3xl lg:text-5xl pt-12">
        Dribble Shots
      </h2>

      <div className=" overflow-x-hidden  slider lg:py-20 py-8 md:space-y-12 space-y-12">
        <div className="slide-track w-full overflow-hidden lg:w-full flex-items md:gap-12">
          {dribbleShots?.map(({ image }: any, i: number) => (
            <PlayGroundDesigns key={i} img={image?.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
