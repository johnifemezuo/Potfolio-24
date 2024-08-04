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
}: any) => {
  const designs = projects?.filter((project:any) => project.projectType === "design");
  // const webflows = projects?.filter((project:any) => project.projectType === "framer");
  const developments = projects?.filter(
    (project:any) => project.projectType === "development"
  );

  return (
    <div className="w-[400px] sticky top-44 h-screen  hidden xl:block space-y-20  ">
      <div>
        <h2
          className="text-white text-lg md:text-3xl font-medium mb-6
          "
        >
          Designs
        </h2>
        <div className="space-y-4">
          {designs?.map((design: any, ind:any) => (
            <div key={ind}>
              <SmallBorderButton
                active={design.projectTitle === selectedName}
                onClick={() => handleNameSelect(design.projectTitle)}
                title={design.ProjectTitle}
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
          {developments?.map((dev:any, ind:any) => (
            <div key={ind}>
              <SmallBorderButton
                active={dev.projectTitle === selectedName}
                onClick={() => handleNameSelect(dev.projectTitle)}
                title={dev.ProjectTitle}
              />
              <br />
            </div>
          ))}
        </div>
      </div>

      {/* <div>
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
      </div> */}


    </div>
  );
};
