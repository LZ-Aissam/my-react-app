import { useState } from "react";
import { useRandomUsers } from "../hooks/useRandomUsers";
import UserList from "./UserList";
import Pagination from "./Pagination";

export default function UsersSection() {
  const { isLoading, error, users } = useRandomUsers();
  const [page, setPage] = useState(1);

  const start = (page - 1) * 10;
  const current = users.slice(start, start + 10);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <UserList users={current} />
      <Pagination total={users.length} page={page} setPage={setPage} />
    </div>
  );
}
