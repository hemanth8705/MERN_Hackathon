import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: process.env.VITE_REACT_APP_API_URL,
    withCredentials: true,
    timeout: 120000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});