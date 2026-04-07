import api from "../../shared/api/axiosInstance.ts";

export const getUsers = () => api.get(`/users`);
