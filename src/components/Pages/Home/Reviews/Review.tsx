import Image from "next/image";

export const Review = ({
  name,
  img,
  review,
  title,
}: {
  name: string;
  img: string;
  review: string;
  title: string;
}) => {
  return (
    <>
      <div className="rounded-3xl min-w-[100px] md:w-ful bg-[#E3E8EA] p-10 space-y-9 xl:space-y-12 ">
        <div className="flex--items space-x-3">
          <Image
            src={img}
            alt="me"
            width={50}
            height={50}
            className="rounded-full object-cover w-14 h-14 border-2 border-[#E94E3C]"
          />
          <div>
            <h1 className="text-lg md:text-xl font-medium text-zinc-800">{name}</h1>
            <span className="text-zinc-700">{title}</span>
          </div>
        </div>
        <p className="text-lg md:text-2xl 2xl:text-3xl text-zinc-800 lg:pt-12">
          {review}
        </p>
      </div>
    </>
  );
};
