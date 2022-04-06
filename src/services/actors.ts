import axios from "axios"
import { Actor } from "../types"


export const getActors = (page: number, size: number): Promise<Actor[]> => {
  return axios.get<Actor[]>(
    'https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/actors.json',
    {
      headers: {},
      params: {
        page,
        size,
      },
    }
  )
    .then((res) => res.data.slice(page * size, page * size + size))
};

export const getActor = (id: string): Promise<Actor> => {
  return axios
    .get<Actor>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/actors/${id}`
    )
    .then((res) => res.data)
};

export const createActor = (data: Actor): Promise<Actor> => {
  return axios
    .post<Actor>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/acotrs`,
      data,
      {
        headers: {},
      }
    )
    .then((res) => res.data)
};

export const editActor = (id: string, data: Actor): Promise<Actor> => {
  return axios
    .put<Actor>(
      `https://dev-dar-cms-uploads.s3.amazonaws.com/dar-lab/actors/${id}`,
      data,
      {
        headers: {},
      }
    )
    .then((res) => res.data);
};