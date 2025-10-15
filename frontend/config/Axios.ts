import axios from "axios";
const token = localStorage.getItem("token");


const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // ✅ keeps cookie attached in requests
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default AxiosInstance;
