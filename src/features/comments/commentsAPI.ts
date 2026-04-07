import api from "../../shared/api/axiosInstance.ts";
import type { Comment } from "../../shared/types/commentsTypes.ts";
export const getComments = (postId: number) => api.get(`posts/${postId}/comments`);

export const getLimitComments = (postId: number, page: number, limit: number) =>
    api.get(`comments?postId=${postId}&_page=${page}&_limit=${limit}`);
