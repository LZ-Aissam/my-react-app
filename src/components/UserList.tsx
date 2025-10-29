import UserCard from "./UserCard";

export default function UserList({ users }: any) {
  if (!users || users.length === 0) {
    return <p>Aucun utilisateur.</p>;
  }

  return (
    <div>
      {users.map((u: any) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}
