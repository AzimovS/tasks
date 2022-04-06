import axios from "axios"
import { Movie } from "../types"


export const getMovies = (page: number, size: number): Promise<Movie[]> => {
  return axios.get<Movie[]>(
    'https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies.json',
    {
      headers: {},
      params: {
        page,
        size,
      },
    }
  )
    .then((res) => res.data)
};

export const getMovie = (id: string): Promise<Movie> => {
  return axios
    .get<Movie>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies/${id}`
    )
    .then((res) => res.data)
};

export const createMovie = (data: Movie): Promise<Movie> => {
  return axios
    .post<Movie>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies`,
      data,
      {
        headers: {},
      }
    )
    .then((res) => res.data)
};

export const editMovie = (id: string, data: Movie): Promise<Movie> => {
  return axios
    .put<Movie>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/movies/${id}`,
      data,
      {
        headers: {},
      }
    )
    .then((res) => res.data);
};