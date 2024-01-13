import { SmallBorderButton } from "@/components"

export const WorkSidebar = () => {
    return (
        <div className="w-[500px] sticky top-5 h-screen  hidden md:block">
          <h2 className="text-white text-lg md:text-3xl font-medium mb-6
          ">Designs</h2>
          <div className="space-y-4">
            <SmallBorderButton active={false} onClick={() => {}} title="Rendlr" /><br/>
            <SmallBorderButton active={false} onClick={() => {}} title="Piabol" /><br/>
            <SmallBorderButton active={false} onClick={() => {}} title="Moonlight" /><br/>
            <SmallBorderButton active={false} onClick={() => {}} title="Rendlr" /><br/>
          </div>
        </div>
    )
}