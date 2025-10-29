import TodoRow from "./TodoRow";

export interface Task {
  id: number | string;
  texte: string;
}

interface TodoTableProps {
  tasks: Task[];
}

export default function TodoTable({ tasks }: TodoTableProps) {
  if (tasks.length === 0) {
    return <p>Aucune tâche pour le moment.</p>;
  }

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>#</th>
          <th>Tâche</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((t, i) => (
          <TodoRow key={t.id} index={i} task={t} />
        ))}
      </tbody>
    </table>
  );
}
