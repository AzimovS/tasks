import React, { useContext, useEffect, useState } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import { Movie, Actor } from "../../types";
import "./Main.scss";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import { MovieContext } from "../../contexts/MovieContext";
import { getMovies } from "../../services/movies";
import { getActors } from "../../services/actors";

const Main = () => {
  const { movie } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);

  const [loadingMovies, setLoadingMovies] = useState(false);
  const [loadingActors, setLoadingActors] = useState(false);

  const actorPageSize = 3;

  useEffect(() => {
    setLoadingMovies(true);
    const getData = async () => {
      try {
        const moviesRes = await getMovies(0, 20);
        setMovies(moviesRes);
      } catch (e) {
        console.error(e);
      }
      setLoadingMovies(false);
    };
    getData();
  }, []);

  useEffect(() => {
    setLoadingActors(true);
    const getData = async () => {
      try {
        const actorsRes = await getActors(2, actorPageSize);
        console.log(actorsRes);
        setActors(actorsRes);
      } catch (e) {
        console.error(e);
      }
      setLoadingActors(false);
    };
    getData();
  }, []);

  const actorClickHandler = (v: Actor) => {
    setSelectedActor(v);
  };

  return (
    <div className="MainPage">
      <div className="MoviePage">
        <h2 className="header">Movies ({movies.length})</h2>
        {loadingMovies ? (
          <h3>Loading movies...</h3>
        ) : (
          <MoviesList movies={movies} />
        )}
        <VideoPlayer url={selectedMovie?.trailer} />
      </div>
      <div className="ActorPage">
        <h2 className="header">Actors({actors.length})</h2>
        {loadingActors ? (
          <h3>Loading actors...</h3>
        ) : (
          <ActorsList
            actors={actors}
            selectedId={selectedActor?.objectID}
            onActorClick={actorClickHandler}
          />
        )}
      </div>
    </div>
  );
};
export default Main;
