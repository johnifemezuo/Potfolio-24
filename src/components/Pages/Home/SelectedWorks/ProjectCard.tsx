import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

interface IProjectCard {
  title: string;
  desc: string;
  img: string;
  tags?: string[];
  link: string;
}
export const ProjectCard = ({ title, desc, img, tags, link }: IProjectCard) => {
  return (
    <Link href={link}>
      <div className="h-[300px] lg:h-screen w-full bg-red-400 relative group ">
        <Image
          src={img}
          alt="project"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />

        <div className=" linear-dark absolute inset-0 flex justify-between p-12 lg:p-12">
          <div className="absolute bottom-0 right-0 left-0 px-4 lg:px-12 pb-6 lg:pb-12 xl:flex justify-between items-end space-y-4 xl:space-y-0">
            <div className="space-y-6 w-full  xl:md:max-w-3xl">
              <h1 className="text-2xl md:text-xl lg:text-6xl font-semibold text-white">{title}</h1>
              <p className=" hidden sm:block text-sm md:text-base lg:text-xl text-white ">
                {desc}
              </p>
            </div>

            <div className="flex gap-3 xl:flex-col">
              {tags?.map((tag, i) => (
                <span key={i} className="rounded-border text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
