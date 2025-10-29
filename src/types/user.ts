export interface RandomUserAPIResponse {
  results: RandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface RandomUser {
  gender: "male" | "female";
  name: { title: string; first: string; last: string };
  email: string;
  login: { uuid: string };
  phone: string;
  picture: { large: string; medium: string; thumbnail: string };
  nat: string;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
};
