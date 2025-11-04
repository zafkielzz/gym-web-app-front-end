import api from "./axiosInstance";

export const loginUser = async (data) => {
  const res = await api.post("/auth/token", data);
  localStorage.setItem("token", res.data.result.token);

  return res.data;
};
