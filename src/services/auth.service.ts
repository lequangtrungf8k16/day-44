import { User } from "../types/user.type";

export const checkLogin = (email: string, password: string): User | null => {
  if (email === "admin@gmail.com" && password === "123456") {
    return {
      email: email,
      name: "Admin",
    };
  }

  return null;
};
