import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;
const resource = 'comments';
const api = url + resource;

export const getComments = () =>  axios.get(api);

export const createComments = (data) => axios.paots(api, data);

export const showComments = (id) => axios.get(`${api}/${id}`);

export const updateComments = (id, data) => axios.patch(`${api}/${id}`, data);

export const deleteComments = (id) => axios.delete(`${api}/${id}`);



