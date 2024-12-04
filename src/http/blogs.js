import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;
const resource = 'blogs';
const api = url + resource;

export const getBlogs = () => axios.get(api);

export const createBlog = (data) => axios.post(api, data)

export const showBlog = (id) => axios.get(`${api}/${id}`);

export const updateBlog = (id, data) => axios.patch(`${api}/${id}`, data);

export const deleteBlog = (id) => axios.delete(`${api}/${id}`);