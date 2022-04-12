import axios from 'axios';
import { Faculty } from '../types';

const API_ROOT = 'https://ca-api.witharts.kz';

export const getFaculties = () => {
  return axios.get<Faculty[]>(`${API_ROOT}/faculties`).then((res) => res.data);
};

export const getFaculty = (id: string) => {
  return axios
    .get<Faculty>(`${API_ROOT}/faculties/${id}`)
    .then((res) => res.data);
};

export const createFaculty = (data: Partial<Faculty>) => {
  return axios
    .post<Faculty>(`${API_ROOT}/faculties`, data)
    .then((res) => res.data);
};

export const editFaculty = (id: string, data: Partial<Faculty>) => {
  return axios
    .put<Faculty>(`${API_ROOT}/faculties/${id}`, data)
    .then((res) => res.data);
};
