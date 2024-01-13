
export const SmallBorderButton = ({
  onClick,
  active,
  title,
}: {
  onClick: () => void;
  active: boolean;
  title: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "bg-white font-medium border-none text-black" : ""
      } border rounded-full px-4 py-2.5 border-zinc-400  hover:text-white transition-all hover:border-white text-zinc-400 font-light text-sm`}
    >
      {title}
    </button>
  );
};
