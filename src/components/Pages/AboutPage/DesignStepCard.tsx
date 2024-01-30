export const DesignStepCard = ({title, description, num}: {title: string; description: string; num: string}) => {
    return (
        <div className="border border-zinc-700 rounded-xl p-4 w-full sm:inline-block space-y-2 md:p-6 border-dotted 
        ">
            <p className="rounded-full border-zinc-600 text-zinc-600 border w-9 place-content-center grid h-9  md:w-10 md:h-10">{num}</p>
          <h3 className="text-white text-xl md:text-3xl tracking-tighter">{title}</h3>
          <p className="text-zinc-500 md:text-lg tracking-tighter">{description} </p>
        </div>
    )
}