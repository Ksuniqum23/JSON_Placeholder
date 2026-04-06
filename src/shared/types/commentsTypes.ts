export interface Comment {
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string,
}

export interface commentState {
    comments: Comment[];
    loading: boolean;
    error: string | null;
}

export type CommentsResponse = Comment[];
