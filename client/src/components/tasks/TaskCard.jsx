import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">Destino: {task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <ButtonLink to={`/tasks/${task._id}`}>Editar</ButtonLink>
          <Button onClick={() => deleteTask(task._id)}>Eliminar</Button>
        </div>
      </header>
      <br /><p className="text-slate-300">Descripcion: {task.description}</p>
      {/* format date */}
      <p>Fecha viaje: &nbsp;
        {task.date &&
          new Date(task.date).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
