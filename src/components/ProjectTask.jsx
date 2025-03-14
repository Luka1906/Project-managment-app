export default function ProjectTask({ task, id, onDeleteTask }) {
  return (
    <div className="relative top-10 flex justify-between bg-stone-100 p-4 py-4">
      <p>
        {task}    </p>
        <button onClick={() => onDeleteTask(id)} className="hover:text-red-600">Clear</button>
  
    </div>
  );
}
