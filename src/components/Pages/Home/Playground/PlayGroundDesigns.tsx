import Image from "next/image";

export const PlayGroundDesigns = ({img}:{img:string}) => {
    return (
      <div className="overflow-hidden rounded-3xl min-w-[170px] md:w-full h-[200px]  lg:h-[300px] xl:h-[550px]">
        <Image src={img} alt="Playground designs" className=" w-full object-cover " width={700} height={700} />
      </div>
    );
}