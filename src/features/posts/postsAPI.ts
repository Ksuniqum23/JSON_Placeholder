import api from "../../shared/api/axiosInstance.ts";
import type {Post} from "../../shared/types/postsTypes.ts";

export const getPosts = () => api.get('posts');
export const getLimitPosts = (page: number, limit: number): Promise<Post[]> => api.get(`posts?_page=${page}&_limit=${limit}`);
