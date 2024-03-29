import { CloseIcon } from "../../";

export const CloseBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex--items space-x-3 group absolute top-0 right-0 m-3 md:m-6 z-30"
    >
      <span className="transition duration-500  lg:text-xl text-stone-600 font-light group-hover:text-stone-400">
        Close
      </span>
      <span className="bg-zinc-800 transition duration-500   rounded-full grid place-content-center p-4 md:p-5 group-hover:rotate-180 group-hover:border-stone-600 ">
        <CloseIcon className="w-5 md:h-6 md:w-6 h-5 text-white" />
      </span>
    </button>
  );
};
