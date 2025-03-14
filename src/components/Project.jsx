export default function Project({ title, onOpenProject}) {

 
  return (
    <ul>
      <li onClick={() => onOpenProject(title)}  className="text-slate-200 cursor-pointer hover:bg-slate-700 rounded-lg p-2 relative ">{title}</li>
    </ul>
  );
}
