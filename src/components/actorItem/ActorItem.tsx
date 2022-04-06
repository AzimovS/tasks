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

        {/* {!isSelected && <StyledItemImg src={actor.image_path} alt={actor.name} />}
        {isSelected && <VideoPlayer url={actor.im} replaceImage={replaceImage}/>} */}
        <div>{actor.name}</div>
        <div>{actor.alternative_name}</div>
        <div>{actor.rating}</div>
        <button onClick={followClick}>
          {isFollowed ? "Following" : "Follow"}
        </button>
      </div>
    </StyledActorItem>
  );
};

export default ActorItem;
