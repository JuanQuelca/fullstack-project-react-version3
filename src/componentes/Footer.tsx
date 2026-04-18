import { Task } from "../App";

interface Props {
  tasks: Task[];
}

export default function Footer({ tasks }: Props) {
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="footer">
      {completed} de {tasks.length}  tareas completadas
    </div>
  );
}