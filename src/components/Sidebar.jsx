
import Project from "./Project";
export default function Sidebar({ onOpenInput, projects, onOpenProject}) {
  return (
    <>
      <div className="bg-gray-900 flex flex-col gap-8  h-screen rounded-tr-xl mt-10 w-72 p-10  ">
        <h2 className="text-slate-200 uppercase text-lg font-bold">
          Your projects
        </h2>
        <button
          onClick={onOpenInput}
          className="text-base text-slate-100 bg-slate-700 w-32 opacity-65 p-2  rounded-md"
        >
          +Add Project
        </button>
        <div>
          {projects.map((project, index) => (
            <Project key={index} title={project} onOpenProject={onOpenProject}  />
          ))}
        </div>
      </div>
    </>
  );
}
