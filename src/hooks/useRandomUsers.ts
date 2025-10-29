import { useFetch } from "./useFetch";

type ApiShape = { results: any[] };

export function useRandomUsers() {
  const { data, isLoading, error } = useFetch<ApiShape>(
    "https://randomuser.me/api/?results=20"
  ) as any;

  const users = (data?.results ?? []).map((u: any) => ({
    id: u?.login?.uuid ?? String(Math.random()),
    firstName: u?.name?.first ?? "",
    lastName: u?.name?.last ?? "",
    email: u?.email ?? "",
    phone: u?.phone ?? "",
    avatar: u?.picture?.medium ?? "",
  }));

  return { isLoading: !!isLoading, error: error ?? null, users };
}
