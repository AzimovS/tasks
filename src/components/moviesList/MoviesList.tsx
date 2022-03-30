import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { Movie } from "../../types";
import MovieItem from "../movieItem/MovieItem";
import styles from "./MoviesList.module.scss";

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div className={styles.listItem} key={movie.id}>
          <MovieItem movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
