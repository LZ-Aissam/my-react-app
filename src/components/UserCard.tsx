import { useState } from "react";

export default function UserCard({ user }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
      <img src={user.avatar} alt="" width={50} height={50} />
      <p>
        {user.firstName} {user.lastName}
      </p>

      {open && (
        <div>
          <p>Email : {user.email}</p>
          <p>Téléphone : {user.phone}</p>
        </div>
      )}

      <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
    </div>
  );
}
