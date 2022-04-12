
export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
  image: string;
  trailer: string;
}

export interface Actor {
  objectID: string;
  name: string;
  rating: number;
  image_path: number;
  alternative_name: string;
}

export interface User {
  login: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

export interface Course {
  name: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  score: number;
  courses: Course[];
}

export interface Faculty {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
