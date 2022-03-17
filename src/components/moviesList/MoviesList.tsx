import React from 'react';
import { Movie } from '../../types';
import MovieItem from '../movieItem/MovieItem';
import styles from './MoviesList.module.scss';

type Props = {
  movies: Movie[];
  selectedId?: number;
  onMovieClick: (v: Movie) => void;
};

const MoviesList: React.FC<Props> = ({ movies, selectedId, onMovieClick }) => {
  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div className={styles.listItem} key={movie.id}>
          <MovieItem movie={movie} isSelected={movie.id === selectedId} onItemClick={onMovieClick} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
