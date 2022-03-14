import React from 'react';
import MoviesList from '../../components/moviesList/MoviesList';
import { movies } from '../../mock';

const Main = () => {
  return (
    <div>
      <h2>Movies ({movies.length})</h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Main;
