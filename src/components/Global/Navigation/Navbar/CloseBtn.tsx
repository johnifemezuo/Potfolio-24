import { CloseIcon } from "../../";

export const CloseBtn = () => {
  return (
    <div className="flex--items space-x-3 group absolute top-0 right-0 m-6">
      <span className="transition duration-500  lg:text-xl text-stone-100 font-light group-hover:text-stone-200">
        Close
      </span>
      <span className="bg-white transition duration-500   rounded-full grid place-content-center p-5 group-hover:rotate-180 group-hover:border-stone-600 ">
        <CloseIcon className="w-4 md:h-6 md:w-6 h-4 text-stone-600" />
      </span>
    </div>
  );
};
