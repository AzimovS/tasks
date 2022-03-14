import { Movie } from './types';
import { Actor } from './types';

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Batman',
    description: 'asd',
    duration: 120,
    image: 'https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
  },
  {
    id: 2,
    title: 'Spiderman',
    description: 'asd',
    duration: 90,
    image: 'https://cdn.mos.cms.futurecdn.net/y2FXvdPpK8WBj79PivRUgk.jpg',
  },
  {
    id: 3,
    title: 'Robin',
    description: 'asd',
    duration: 120,
    image: 'https://i.pinimg.com/originals/9a/40/fb/9a40fb057274e64f13866cee3dea53db.jpg',
  },
];

export const actors: Actor[] = [
  {
    id: 1,
    name: 'Dwayne Johnson',
    movies: 'Red Notice, Black Adam',
    age: 49,
    image: 'https://variety.com/wp-content/uploads/2020/12/Dwayne_Johnson.png?w=970'
  },
  {
    id: 2,
    name: 'Will Smith',
    movies: 'Red Notice, Black Adam',
    age: 49,
    image: 'https://e7.pngegg.com/pngimages/841/519/png-clipart-will-smith-one-strange-rock-actor-national-geographic-film-producer-will-smith-celebrities-moustache.png'
  },
  {
    id: 3,
    name: 'Tom Hanks',
    movies: 'Forrest Gump, The Green Mile',
    age: 65,
    image: 'https://live.staticflickr.com/3700/10278915286_bcb7353093_b.jpg'
  }
]