import Image from "next/image";
import { Review } from ".";

export const Reviews = () => {
  return (
    <div className="w-full bg-white">
      <div className="overflow-hidden">
        <div className=" border-y capitalize border-zinc-500 w-[350%] text-[5rem] xl:border-b font-medium text-zinc-900 overflow-x-auto md:text-[10rem] lg:text-[12rem] 2xl:text-[17rem]">
          Make you shine.
        </div>

        <div className="xl:flex py-8 lg:py-12">
          <div className="lg:grid xl:place-content-center xl:text-right xl:w-[40%] lg:border-r border-zinc-500 px-4 py-8 xl:p-20  space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">Reviews</h1>
            <p className="text-lg md:text-xl text-zinc-700">
              What Clients and employees think of me.
            </p>
          </div>

          <div className="xl:w-[70%] p-4 xl:14 2xl:p-20 flex w-[1200px] lg:w-full overflow-x-auto md:grid-cols-2 md:grid  gap-4 md:gap-6 2xl:gap-12">
            <Review
              name="Chinedu Azodoh"
              img="/images/me.png"
              review="I enjoy creating new visions and trying different visual techniques. Therefore,  enjoy creating new visions and trying different visual techniques. Therefore you can find many experiments."
              title="CEO Zigah.co & Max.com"
            />
            <Review
              name="Stanley Okechukwu .S"
              img="/images/me.png"
              review="I enjoy creating new visions and trying different visual techniques. Therefore, you can find many experiments."
              title="Software Engineer & CEO Ventlio.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
