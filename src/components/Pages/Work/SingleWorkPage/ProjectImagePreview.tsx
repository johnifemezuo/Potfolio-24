import { ArrowDownIcon } from "@/components";
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
        <Link href={liveSite} target="_blank" rel="noreferrer">
          <button className="group space-x-1 flex--items absolute top-0 z-50 w-[120px] md:w-[200px] -translate-y-20 right-0  p-4 bg-black text-white rounded-full shadow-lg text-xl h-[120px] md:h-[200px] grid place-content-center ">
            <span className="text-sm md:text-base"> Live site</span>
            <span className="rotate-180 group-hover:translate-x-2   duration-500 transition">
              <ArrowDownIcon className="rotate-45 w-6 h-6" />
            </span>
          </button>
        </Link>
      ) : null}
    </div>
  );
};
