import React, { useState } from 'react';
import MoviesList from '../../components/moviesList/MoviesList';
import ActorsList from '../../components/actorsList/ActorsList';
import { movies } from '../../mock';
import { actors } from '../../mock';
import { Movie } from '../../types';
import './Main.scss';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';


const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movieClickHandler = (v: Movie) => {
    setSelectedMovie(v);
  };

  const onClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="MainPage">
      <h2 className="header">Movies ({movies.length})</h2>
      <MoviesList selectedId={selectedMovie?.id} onMovieClick={movieClickHandler} movies={movies} />
      {selectedMovie && (<VideoPlayer url={selectedMovie?.trailer} onClose={onClose} />)}
      <h2>Actors ({actors.length})</h2>
      <ActorsList actors={actors} />
    </div>
  );
};
export default Main;
