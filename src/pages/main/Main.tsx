import React, { useState } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import { movies } from "../../mock";
import { actors } from "../../mock";
import { Movie, Actor } from "../../types";
import "./Main.scss";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);

  const movieClickHandler = (v: Movie) => {
    setSelectedMovie(v);
  };

  const onCloseMovie = () => {
    setSelectedMovie(null);
  };

  const actorClickHandler = (v: Actor) => {
    setSelectedActor(v);
  };

  const onCloseActor = () => {
    setSelectedActor(null);
  };

  return (
    <div className="MainPage">
      <div className="MoviePage">
        <h2 className="header">Movies ({movies.length})</h2>
        <MoviesList
          selectedId={selectedMovie?.id}
          onMovieClick={movieClickHandler}
          movies={movies}
        />
        {selectedMovie && (
          <VideoPlayer url={selectedMovie?.trailer} onClose={onCloseMovie} />
        )}
      </div>
      <div className="ActorPage">
        <h2 className="header">Actors({actors.length})</h2>
        <ActorsList
          actors={actors}
          selectedId={selectedActor?.id}
          onActorClick={actorClickHandler}
        />
      </div>
    </div>
  );
};
export default Main;
