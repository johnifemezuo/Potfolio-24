import { ArrowDownIcon, RoundedButton } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const ProjectImagePreview = ({
  src,
  liveSite,
}: {
  src: string;
  liveSite?: string;
}) => {
  return (
    <div className="relative mb-12 md:mb-20   h-[300px] md:h-[50vh] lg:h-[55vh] xl:h-[80vh] n">
      <Image
        src={src}
        alt="john ifemezuo project image"
        width={1200}
        className=" w-full h-full object-cover"
        height={1000}
      />

      {liveSite ? (
        <div className="absolute top-0 -translate-y-20 right-0 ">
          <RoundedButton link={liveSite} />
        </div>
      ) : null}
    </div>
  );
};
