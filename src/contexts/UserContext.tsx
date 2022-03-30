import { createContext, ReactNode, useState } from "react";
import { User } from "../types";

interface ProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<{
  user: User | null;
  login: (user: User) => void;
  logout: (user: null) => void;
}>({ user: null, login: () => {}, logout: () => {} });

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, login: setUser, logout: setUser }}>
      {children}
    </UserContext.Provider>
  )
};
