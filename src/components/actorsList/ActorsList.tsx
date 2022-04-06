import React from "react";
import { Actor } from "../../types";
import ActorItem from "../actorItem/ActorItem";
import styles from "./ActorList.module.scss";

type Props = {
  actors: Actor[];
  selectedId?: string;
  onActorClick: (v: Actor) => void;
};

const ActorList: React.FC<Props> = ({ actors, selectedId, onActorClick }) => {
  return (
    <div className={styles.list}>
      {actors.map((actor) => (
        <div className={styles.listItem} key={actor.objectID}>
          <ActorItem
            actor={actor}
            isSelected={actor.objectID === selectedId}
            onItemClick={onActorClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ActorList;
