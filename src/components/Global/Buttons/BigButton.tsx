import { IButton } from "./button.interface"

export const BigButton = ({
    onClick,
    active,
    title,
  }: IButton) => {
    return (
        <button onClick={onClick} className={`${ active ? "bg-accent-colorTwo font-medium text-black border-none" : "hover:border-zinc-200 hover:text-zinc-200 text-stone-400"} border  border-stone-400 text-sm   rounded-full px-4 py-2 md:px-6 md:py-3 transition-all lg:text-base inline-block text-center  w-auto`}>
        {title}
        </button>
    )
}