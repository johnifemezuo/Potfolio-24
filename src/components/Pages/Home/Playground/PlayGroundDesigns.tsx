import Image from "next/image";

export const PlayGroundDesigns = ({img}:{img:string}) => {
    return (
      <div className="overflow-hidden w-full md:w-full h-[150px]  lg:h-[300px] border-8 border-gray-500/50">
        <Image src={img} alt="Playground designs" className=" w-full object-cover " width={700} height={700} />
      </div>
    );
}