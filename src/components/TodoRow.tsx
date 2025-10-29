import type { Task } from "./TodoTable";

interface TodoRowProps {
  index: number;
  task: Task;
}

export default function TodoRow({ index, task }: TodoRowProps) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.texte}</td>
    </tr>
  );
}
