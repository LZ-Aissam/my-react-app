interface TodoInputProps {
  valeur: string;
  onChange: (v: string) => void;
  onAdd: () => void;
}

export default function TodoInput({ valeur, onChange, onAdd }: TodoInputProps) {
  return (
    <div>
      <input
        type="text"
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Ajouter</button>
    </div>
  );
}
