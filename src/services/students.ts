import axios from 'axios';
import { Student } from '../types';

const API_ROOT = 'https://ca-api.witharts.kz';

export const getStudents = () => {
  return axios.get<Student[]>(`${API_ROOT}/students`).then((res) => res.data);
    // return Promise.reject(new Error("Request failed"));

};

export const getStudent = (id: string) => {
  return axios
    .get<Student>(`${API_ROOT}/students/${id}`)
    .then((res) => res.data);
};

export const createStudent = (data: Partial<Student>) => {
  return axios
    .post<Student>(`${API_ROOT}/students`, data)
    .then((res) => res.data);
};

export const editStudent = (id: string, data: Partial<Student>) => {
  return axios
    .put<Student>(`${API_ROOT}/students/${id}`, data)
    .then((res) => res.data);
};

export const deleteStudent = (id: string) => {
  return axios
    .delete<Student>(`${API_ROOT}/students/${id}`)
    .then((res) => res.data);
}