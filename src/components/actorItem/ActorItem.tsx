import React, { useState } from "react";
import { Actor } from "../../types";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { StyledItemImg, StyledActorItem } from "./ActorItem.styles";

type Props = {
  actor: Actor;
  isSelected: boolean;
  onItemClick: (v: Actor) => void;
};

const ActorItem: React.FC<Props> = ({ actor, isSelected, onItemClick }) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const followClick = () => {
    setIsFollowed(!isFollowed);
  };
  const replaceImage = true;

  return (
    <StyledActorItem selected={isSelected}>
      <div onClick={() => onItemClick(actor)}>

        {!isSelected && <StyledItemImg src={actor.image} alt={actor.name} />}
        {isSelected && <VideoPlayer url={actor.video} replaceImage={replaceImage}/>}
        <div>{actor.name}</div>
        <div>{actor.movies}</div>
        <div>{actor.age} y. o.</div>
        <button onClick={followClick}>
          {isFollowed ? "Following" : "Follow"}
        </button>
      </div>
    </StyledActorItem>
  );
};

export default ActorItem;
