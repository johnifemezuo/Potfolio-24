import Image from "next/image";

export const ProjectImagePreview = ({src}:{src: string}) => {
  return (
    <div className="relative mb-12 md:mb-20  border-[#a8a8a8] h-[300px] md:h-[50vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden">
      <Image
        src={src}
        alt="john ifemezuo project image"
        width={1200}
        className="object-cover w-full h-full"
        height={900}
      />
    </div>
  );
};
