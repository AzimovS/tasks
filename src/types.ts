
export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
  image: string;
  trailer: string;
}

export interface Actor {
  id: number;
  name: string;
  movies: string;
  age: number;
  image: string;
  video: string;
}

export interface User {
  login: string;
  firstname: string;
  lastname: string;
  avatar: string;
}