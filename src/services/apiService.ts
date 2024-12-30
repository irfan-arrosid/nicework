import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const BASE_URL = import.meta.env.VITE_REACT_API_URL;
const STORAGE_URL = import.meta.env.VITE_REACT_API_STORAGE;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});

export const isAxiosError = axios.isAxiosError;

export default apiClient;

export const baseURL = STORAGE_URL;
