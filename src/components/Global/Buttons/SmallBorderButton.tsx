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
        active ? "bg-white font-medium border-none hover:text-black  text-black" : "text-zinc-400"
      } border rounded-full px-4 py-2.5 border-zinc-400   transition-all uppercase hover:border-white font-light text-sm`}
    >
      {title}
    </button>
  );
};
