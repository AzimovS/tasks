import { Actor } from '../../types'

type Props = {
  actor: Actor;
}

const ActorItem: React.FC<Props> = ({ actor }) => {
  return (
    <div className="movie-item" style={{ marginBottom: '1rem' }}>
      <img src={actor.image} alt={actor.name} style={{ width: '200px' }} />
      <div>{actor.name}</div>
      <div>{actor.movies}</div>
      <div>{actor.age} y. o.</div>
      {/* <button onClick={watchLaterClick}>
        {state.addedToWatchLater ? 'Added to list' : 'Watch later'}
      </button> */}
    </div>
  );
}

export default ActorItem;