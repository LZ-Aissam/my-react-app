import { useUserContext } from "../hooks/useUserContext";

export const ComponentB = () => {
  const { isAdmin, verifyAdmin } = useUserContext();
  return (
    <div>{isAdmin ? "Vous êtes administrateur" : "Vous n'êtes pas administrateur"}</div>
  );
}