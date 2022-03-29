import React, { useContext } from 'react';
import { SelectedMovieContext } from '../../pages/main/Main';
import { Movie } from '../../types';
import MovieItem from '../movieItem/MovieItem';
import styles from './MoviesList.module.scss';

type Props = {
  movies: Movie[];
  selectedId?: number;
  onMovieClick: (v: Movie) => void;
};

const MoviesList: React.FC<Props> = ({ movies, selectedId, onMovieClick }) => {
  const selectedMovie = useContext(SelectedMovieContext);

  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div className={styles.listItem} key={movie.id}>
          <MovieItem movie={movie} isSelected={movie.id === selectedMovie} onItemClick={onMovieClick} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
