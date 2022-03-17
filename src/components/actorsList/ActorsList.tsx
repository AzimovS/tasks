import React from "react";
import { Actor } from "../../types";
import ActorItem from "../actorItem/ActorItem";
import styles from "./ActorList.module.scss";

type Props = {
  actors: Actor[];
  selectedId?: number;
  onActorClick: (v: Actor) => void;
};

const ActorList: React.FC<Props> = ({ actors, selectedId, onActorClick }) => {
  return (
    <div className={styles.list}>
      {actors.map((actor) => (
        <div className={styles.listItem} key={actor.id}>
          <ActorItem
            actor={actor}
            isSelected={actor.id === selectedId}
            onItemClick={onActorClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ActorList;
