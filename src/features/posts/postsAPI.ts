import api from "../../shared/api/axiosInstance.ts";

export const getPosts = () => api.get('posts');
