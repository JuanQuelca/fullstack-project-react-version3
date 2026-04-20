import { useState, useEffect } from "react";
import Header from "./componentes/Header";
import TaskInput from "./componentes/TaskInput";
import TaskList from "./componentes/TaskList";
import Footer from "./componentes/Footer";
import EmptyState from "./componentes/EmptyState";
import "./index.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks`);

      if (!res.ok) {
        throw new Error("Error al obtener tareas");
      }

      const data: Task[] = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Error en fetchTasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (text: string) => {
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        throw new Error("Error al agregar tarea");
      }

      fetchTasks();
    } catch (error) {
      console.error("Error en addTask:", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error al eliminar tarea");
      }

      fetchTasks();
    } catch (error) {
      console.error("Error en deleteTask:", error);
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);

    if (!task) return;

    try {
      const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: task.text,
          completed: !task.completed,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar tarea");
      }

      fetchTasks();
    } catch (error) {
      console.error("Error en toggleTask:", error);
    }
  };

  const editTask = async (id: number, newText: string) => {
    const task = tasks.find((t) => t.id === id);

    if (!task) return;

    try {
      const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: newText,
          completed: task.completed,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al editar tarea");
      }

      fetchTasks();
    } catch (error) {
      console.error("Error en editTask:", error);
    }
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
            onEdit={editTask}
          />
        )}

        <Footer tasks={tasks} />
      </div>
    </div>
  );
}