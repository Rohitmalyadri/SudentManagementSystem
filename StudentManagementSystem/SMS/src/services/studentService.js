import axios from 'axios';

const BASE_URL = 'http://localhost:7071/api/students';

export const getAllStudents = () => axios.get(BASE_URL);
export const getStudentById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createStudent = (student) => axios.post(BASE_URL, student);
export const updateStudent = (id, student) => axios.put(`${BASE_URL}/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${BASE_URL}/${id}`); 