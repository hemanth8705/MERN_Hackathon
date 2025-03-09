import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_URL, // Use the BASE_URL constant here
    withCredentials: true,
    timeout: 120000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});