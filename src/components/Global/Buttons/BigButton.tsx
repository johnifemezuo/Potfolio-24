import { IButton } from "./button.interface"

export const BigButton = ({
    onClick,
    active,
    title,
  }: IButton) => {
    return (
        <button onClick={onClick} className={`${ active ? "bg-accent-colorTwo font-medium text-black border-none" : "hover:border-zinc-200 hover:text-zinc-200 text-stone-400"} border  border-stone-400 text-xs   rounded-full px-3 py-1.5 md:px-5 md:py-2 transition-all lg:text-base inline-block text-center  w-auto`}>
        {title}
        </button>
    )
}