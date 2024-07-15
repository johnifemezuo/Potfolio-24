import Image from "next/image";

export const PlayGroundDesigns = ({ img }: { img: string }) => {
  return (
    <div className="slide overflow-hidden w-[300px] md:w-full h-[250px]  lg:h-[400px] border-8 border-gray-500/50">
      <Image
        src={img}
        alt="Playground designs"
        className=" w-full object-cover h-full"
        width={700}
        height={700}
      />
    </div>
  );
};
