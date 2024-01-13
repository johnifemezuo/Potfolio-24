
export const MenuBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className="flex--items space-x-3 group">
      <span className="text-stone-300 text-lg hidden md:block">Menu</span>
      <div className="space-y-1.5 group-hover:bg-white transition duration-500  rounded-full grid place-content-center w-12 h-12 md:w-16 md:h-16 md:space-y-2">
        {/* <MenuIcon className="w-4 h-4" /> */}
        <span className="w-8 h-0.5 bg-accent-colorTwo group-hover:bg-black"></span>
        <span className="w-6 h-0.5 bg-accent-colorTwo group-hover:bg-black"></span>
      </div>
    </button>
  );
};
