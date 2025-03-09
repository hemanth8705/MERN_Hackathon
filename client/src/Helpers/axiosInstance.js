import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;


export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});