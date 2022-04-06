import React, { useContext, useEffect, useState } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import ActorsList from "../../components/actorsList/ActorsList";
import { actors } from "../../mock";
import { Movie, Actor } from "../../types";
import "./Main.scss";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import { MovieContext } from "../../contexts/MovieContext";
import { getMovies } from "../../services/movies";

const Main = () => {
  const { movie } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const moviesRes = await getMovies(0, 20);
        setMovies(moviesRes);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
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
         {loading ? (
           <h3>Loading movies...</h3>
         ) : (
           <MoviesList movies={movies} />
         )}
        <VideoPlayer url={selectedMovie?.trailer} />
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
