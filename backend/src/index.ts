import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://fullstack-project-react-version3-1.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origen no permitido por CORS: ${origin}`));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.options("*", cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is working!");
});

app.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { id: "desc" },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo tareas" });
  }
});

app.post("/tasks", async (req: Request, res: Response) => {
  try {
    const { text } = req.body;

    const newTask = await prisma.task.create({
      data: { text, completed: false },
    });

    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error creando tarea" });
  }
});

app.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    await prisma.task.delete({
      where: { id },
    });

    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando tarea" });
  }
});

app.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { text, completed } = req.body;

    const updated = await prisma.task.update({
      where: { id },
      data: {
        text,
        completed,
      },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error actualizando tarea" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});