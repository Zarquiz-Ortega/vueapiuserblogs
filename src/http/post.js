import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;
const resource = 'posts';
const api = url + resource;

export const getPosts = () => axios.get(api);

export const createPost = (data) => axios.post(api, data)

export const showPost = (id) => axios.get(`${api}/${id}`);

export const updatePost = (id, data) => axios.patch(`${api}/${id}`, data);

export const deletePost = (id) => axios.delete(`${api}/${id}`); 
