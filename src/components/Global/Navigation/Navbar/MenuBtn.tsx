import { MenuIcon } from "../../icons";

export const MenuBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className="flex--items space-x-3 group">
      <span className="text-stone-300 text-lg">Menu</span>
      <div className="space-y-1.5 bg-accent-color transition duration-500 group-hover:bg-stone-700 rounded-full grid place-content-center w-12 h-12 md:w-16 md:h-16 md:space-y-2">
        {/* <MenuIcon className="w-4 h-4" /> */}
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </div>
    </button>
  );
};
