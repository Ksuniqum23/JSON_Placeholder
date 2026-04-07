import api from "../../shared/api/axiosInstance.ts";

export const getLimitPosts = (page: number, limit: number) => api.get(`posts?_page=${page}&_limit=${limit}`);
