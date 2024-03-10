import { SmallBorderButton } from "@/components";
import { IProject } from "@/contents";

interface IWorkSidebarProps {
  projects: IProject[];
  handleNameSelect: (name: string) => void;
  selectedName?: string;
}

export const WorkSidebar = ({
  projects,
  handleNameSelect,
  selectedName,
}: IWorkSidebarProps) => {
  const designs = projects.filter((project) => project.category === "design");
  const webflows = projects.filter((project) => project.category === "framer");
  const developments = projects.filter(
    (project) => project.category === "development"
  );

  return (
    <div className="w-[400px] sticky top-5 h-screen  hidden xl:block space-y-20  ">
      <div>
        <h2
          className="text-white text-lg md:text-3xl font-medium mb-6
          "
        >
          Designs
        </h2>
        <div className="space-y-4">
          {designs?.map((design, ind) => (
            <div key={ind}>
              <SmallBorderButton
                active={design.title === selectedName}
                onClick={() => handleNameSelect(design.title)}
                title={design.title}
              />
              <br />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2
          className="text-white text-lg md:text-3xl font-medium mb-6
          "
        >
          Front end
        </h2>
        <div className="space-y-4">
          {developments?.map((dev, ind) => (
            <div key={ind}>
              <SmallBorderButton
                active={dev.title === selectedName}
                onClick={() => handleNameSelect(dev.title)}
                title={dev.title}
              />
              <br />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2
          className="text-white text-lg md:text-3xl font-medium mb-6
          "
        >
          Framer
        </h2>
        <div className="space-y-4">
          {webflows?.map((web, ind) => (
            <div key={ind}>
              <SmallBorderButton
                active={web.title === selectedName}
                onClick={() => handleNameSelect(web.title)}
                title={web.title}
              />
              <br />
            </div>
          ))}

          <p className="text-zinc-400 md:text-lg ">Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};
