import React from 'react';
import { Actor } from '../../types';
import ActorItem from '../actorItem/ActorItem';

type Props = {
  actors: Actor[];
};

const ActorList: React.FC<Props> = ({ actors }) => {
  return (
    <div className="movies-list">
      {actors.map((actor) => (
        <ActorItem key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default ActorList;
