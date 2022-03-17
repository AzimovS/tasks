import React, { useState } from 'react';
import { Movie } from '../../types';
import { StyledItemImg, StyledMovieItem } from './MovieItem.styles';

type Props = {
  movie: Movie;
  isSelected: boolean;
  onItemClick: ( v: Movie ) => void;
};

const MovieItem: React.FC<Props> = ({ movie, isSelected = false, onItemClick }) => {
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

  return (
    <StyledMovieItem selected={isSelected}>
      <div onClick={() => onItemClick(movie)}>
        <StyledItemImg src={movie.image} alt={movie.title} />
        <div>{movie.title}</div>
        <div>{movie.description}</div>
        <div>{movie.duration / 60} hours</div>
        <button onClick={watchLaterClick}>
          {state.addedToWatchLater ? 'Added to list' : 'Watch later'}
        </button>
      </div>
    </StyledMovieItem>
  );
};

export default MovieItem;
