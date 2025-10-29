import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoTable, { type Task } from "./components/TodoTable";
import { useFetch } from "./hooks/useFetch";
import UsersSection from "./components/UsersSection";
import type { RandomUserAPIResponse } from "./types/user";

export default function App() {
  const [saisie, setSaisie] = useState<string>("");
  const [taches, setTaches] = useState<Task[]>([]);

  const { data, error, isLoading } = useFetch<RandomUserAPIResponse>(
    "https://randomuser.me/api/?results=20"
  );

  const ajouterTache = () => {
    if (saisie.trim() === "") return;
    setTaches((prev) => [...prev, { id: Date.now(), texte: saisie }]);
    setSaisie("");
  };

  if (isLoading) {
    return <div>Chargement en cours…</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>To-Do List</h1>

      {data?.results?.[0]?.email && (
        <p>Premier utilisateur : {data.results[0].email}</p>
      )}

      <TodoInput valeur={saisie} onChange={setSaisie} onAdd={ajouterTache} />
      <TodoTable tasks={taches} />

      <div>
        <h1>Liste des utilisateurs</h1>
        <UsersSection />
      </div>
    </div>
  );
}
