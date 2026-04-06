import api from "../../shared/api/axiosInstance.ts";

export const getComments = (postId: number) => api.get(`posts/${postId}/comments`);
