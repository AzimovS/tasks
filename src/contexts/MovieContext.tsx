import { createContext, ReactNode, useState } from "react";
import { Movie } from "../types";

interface ProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext<{
  movie: Movie | null;
  changeMovie: (movie: Movie | null) => void;
}>({ movie: null, changeMovie: () => {} });

export const MovieProvider = ({ children }: ProviderProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  const changeMovie = (m: Movie | null) => {
    setMovie(m);
  };

  return (
    <MovieContext.Provider value={{ movie, changeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
