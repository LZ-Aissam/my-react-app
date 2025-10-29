import type { RandomUserAPIResponse, User } from "../types/user";

export async function fetchRandomUsers(count = 20): Promise<User[]> {
  const url = `https://randomuser.me/api/?results=${count}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const json: RandomUserAPIResponse = await res.json();

  return json.results.map((u) => ({
    id: u.login.uuid,
    firstName: u.name.first,
    lastName: u.name.last,
    email: u.email,
    phone: u.phone,
    avatar: u.picture.medium,
  }));
}
