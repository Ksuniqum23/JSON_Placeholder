import api from "../../shared/api/axiosInstance.ts";

export const getLimitComments = (postId: number, page: number, limit: number) =>
    api.get(`comments?postId=${postId}&_page=${page}&_limit=${limit}`);
