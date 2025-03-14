import { useRef, useState } from "react";
import ProjectTask from "./ProjectTask";

export default function ProjectDetails({
  title,
  date,
  description,
  onDeleteProject,
}) {
  const [taskList, setTaskList] = useState([]);
  const projectTask = useRef();

  const handleAddTask = () => {
    const task = projectTask.current.value;

    setTaskList((prevTask) => [task, ...prevTask]);

    projectTask.current.value = "";
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevList) =>
      prevList.filter((task, taskIndex) => id !== taskIndex)
    );
  };

  const handleDeleteProject = () => {
    onDeleteProject(title);
  };
  return (
    <div className="w-[40vw] flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <button
          className="hover:bg-stone-300 rounded-md  px-3 relative left-3 "
          onClick={handleDeleteProject}
        >
          Delete
        </button>
      </div>
      <p className="text-stone-400">{date}</p>
      <p>{description}</p>
      <div className=" border-t-2 border-stone-400">
        <h2 className="mt-8 text-2xl font-semibold">Tasks</h2>
        <div className="mt-4">
          <input
            ref={projectTask}
            className="bg-stone-200 p-1 w-72 px-3 mr-4 outline-none"
            id="task-input"
            type="text"
          />
          <label
            onClick={handleAddTask}
            className="hover:bg-stone-300 rounded-md px-3 p-2 cursor-pointer"
            htmlFor="task-input"
          >
            Add Task
          </label>
          {taskList.length > 0 ? (
            taskList.map((task, index) => (
              <ProjectTask
                key={index}
                task={task}
                id={index}
                onDeleteTask={handleDeleteTask}
              />
            ))
          ) : (
            <p className="mt-8 text-stone-500">
              This project does not have any tasks yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
