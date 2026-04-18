import { Task } from "../App";


interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TaskCard({ task, onDelete, onToggle }: Props) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
}