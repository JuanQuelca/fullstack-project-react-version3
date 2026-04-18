import { useState } from "react";
import Header from "./componentes/Header";

import TaskInput from "./componentes/TaskInput";
import TaskList from "./componentes/TaskList";
import Footer from "./componentes/Footer";
import EmptyState from "./componentes/EmptyState";
import "./index.css";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="card">
        <Header />
        <TaskInput onAdd={addTask} />

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        )}

        <Footer tasks={tasks} />
      </div>
    </div>
  );
}


