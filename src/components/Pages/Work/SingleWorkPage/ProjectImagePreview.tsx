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
    <div className="relative mb-12 md:mb-20   h-auto">
      <img
        src={src}
        alt="john ifemezuo project image"
        className=" w-full h-full object-cover rounded-xl lg:rounded-[20px]"
      />

      {liveSite ? (
        <div className="absolute top-0 -translate-y-20 right-0 ">
          <RoundedButton link={liveSite} />
        </div>
      ) : null}
    </div>
  );
};
