import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/identity",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!config.url.includes("auth/token") && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
