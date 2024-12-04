import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;
const resource = 'users';
const api = url + resource;

export const getUsers = () => axios.get(api);

export const createUser = (data) => axios.post(api, data);

export const showUser = (id) => axios.get(`${api}/${id}`)

export const updateUser = (id, data) => axios.patch(`${api}/${id}`, data);

export const deleteUser = (id) => axios.delete(`${api}/${id}`);
