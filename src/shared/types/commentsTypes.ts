export interface Comment {
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string,
}

export interface commentState {
    byPostId: Record<number, Comment[]>;
    loading: Record<number, boolean>;
    totalCount: Record<number, number>;
    error: Record<number, string | null>;
}

export type CommentsResponse = Comment[];
