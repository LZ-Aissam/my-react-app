import { useFetch } from "./useFetch";

type ApiShape = { results: any[] };

export function useRandomUsers() {
  const resp = useFetch<ApiShape>("https://randomuser.me/api/?results=20") as any;

  const data = resp?.data;
  const error = resp?.error || null;
  const isLoading = !!resp?.isLoading;

  const users = (data?.results || []).map((u: any) => ({
    id: u?.login?.uuid || String(Math.random()),
    firstName: u?.name?.first || "",
    lastName: u?.name?.last || "",
    email: u?.email || "",
    phone: u?.phone || "",
    avatar: u?.picture?.medium || "",
  }));

  console.log("users:", users.length);

  return { isLoading, error, users };
}
