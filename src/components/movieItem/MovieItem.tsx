import React, { useContext, useState } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { Movie } from "../../types";
import { StyledItemImg, StyledMovieItem } from "./MovieItem.styles";

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const { changeMovie, movie: selectedMovie } = useContext(MovieContext);

  const [state, setState] = useState({
    loading: false,
    addedToWatchLater: false,
  });

  const watchLaterClick = () => {
    setState((newState) => ({
      ...newState,
      addedToWatchLater: true,
    }));
  };

  const onMovieClick = () => {
    changeMovie(movie);
  };

  return (
    <StyledMovieItem
      selected={!!selectedMovie && movie.id === selectedMovie?.id}
    >
      <div onClick={onMovieClick}>
        <StyledItemImg src={movie.image} alt={movie.title} />
        <div>{movie.title}</div>
        <div>{movie.description}</div>
        <div>{movie.duration / 60} hours</div>
      </div>
      <button onClick={watchLaterClick}>
        {state.addedToWatchLater ? "Added to list" : "Watch later"}
      </button>
    </StyledMovieItem>
  );
};

export default MovieItem;
