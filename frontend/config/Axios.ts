// axios.js
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
});

// 🔐 Attach token dynamically before every request
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Always fresh
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
