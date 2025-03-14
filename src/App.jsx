import { useState, useRef } from "react";
import logo from "../assets/logo.png";
import AddProject from "./components/AddProject";
import CenteredContainer from "./components/CenteredContainer";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";

const projects = [
  {
    projects: [],
    description: "",
    date: "",
  },
];

function App() {
  const [mainScreen, setMainScreen] = useState("default");
  const [projectDetails, setProjectDetails] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = () => {
    setMainScreen("input");
  };
  const handleDefaultScreen = () => {
    setMainScreen("default");
  };

  const handleProjectDetails = (title) => {
    const foundProject = projectDetails.find(
      (project) => project.title === title
    );
    setSelectedProject(foundProject);
    setMainScreen("details");
  };

  const onProjectSaved = (values) => {
    setProjectDetails((prevList) => [
      {
        title: values.title,
        description: values.description,
        date: values.date,
      },
      ...prevList, // Spread the existing projects after the new project
    ]);
  };

  const handleDeleteProject = (title) => {
    setProjectDetails((prevList) =>
      prevList.filter((project) => project.title !== title)
    );
  
    // Check if the deleted project is currently selected
    if (selectedProject && selectedProject.title === title) {
      setSelectedProject(null); 
      setMainScreen("default");
    }
  };
  

  return (
    <div className="flex ">
      <Sidebar
        projects={projectDetails.map((project) => project.title)}
        onOpenInput={handleAddProject}
        onOpenProject={handleProjectDetails}
      />
      {mainScreen === "default" && (
        <CenteredContainer>
          <img className="w-14 " src={logo} alt="" />
          <h1 className="my-8 text-2xl text-slate-700 font-bold">
            No Project Selected
          </h1>
          <p className=" text-slate-500">
            Select a project or get started with a new one.
          </p>
          <button
            onClick={handleAddProject}
            className="bg-gray-900 text-gray-400 p-2 px-3 rounded-lg text-sm hover:text-gray-200 hover:bg-gray-700"
          >
            Create new project
          </button>
        </CenteredContainer>
      )}
      {mainScreen === "input" && (
        <AddProject
          onSaved={onProjectSaved}
          onCloseInput={handleDefaultScreen}

        />
      )}
      {mainScreen === "details" && selectedProject && (
        <CenteredContainer>
          <ProjectDetails
            title={selectedProject.title}
            description={selectedProject.description}
            date={selectedProject.date}
            onDeleteProject={handleDeleteProject}
       
          />
        </CenteredContainer>
      )}
    </div>
  );
}

export default App;
