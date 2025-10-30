import { useRandomUsers } from "../hooks/useRandomUsers";
import UserList from "./UserList";

export default function UsersSection() {
  const { isLoading, error, users } = useRandomUsers();

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
