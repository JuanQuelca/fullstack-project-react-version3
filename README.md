# TASK MANAGER
 
La aplicación permite: 
Agregar tareas, 
Marcar tareas como completadas
Eliminar tareas.
Mostrar estadísticas de tareas completadas.
Consumir una API REST (/tasks).
<!-- BADGE_CI -->
 
## 🚀 Instalación local
 
```bash
git clone https://github.com/JuanQuelca/fullstack-project-react-version3
cd fullstack-project-react-version3

```
 
### Variables de entorno

```
DATABASE_URL="postgresql://taskmanager_mqlr_user:DTZYplGiXD6kYL1yIyY0TkGZeO6h7HKP@dpg-d7i6pfl7vvec73a89860-a.oregon-postgres.render.com/taskmanager_mqlr"
PORT=3000
```
 
## 📜 Comandos disponibles
 
| Comando          | Descripción                              |
|------------------|-------------------------------------------|
| `npm run dev`    | Levanta el entorno de desarrollo           |
| `npm run build`  | Genera el build de producción              |
| `npm test`       | Corre las pruebas automatizadas (pendiente — Sesión 3) |



# React + Vite +

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
