export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
    totalCount: number | null;
}

export type PostsResponse = Post[];
