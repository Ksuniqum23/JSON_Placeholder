import type {CommentsResponse, commentState} from "../../shared/types/commentsTypes.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getComments} from "./commentsAPI.ts";

const initialState: commentState = {
    comments: [],
    loading: false,
    error: null,
}

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (postId: number, { rejectWithValue }) => {
        try {
            console.log('try to get:', postId);
            const response = await getComments(postId);
            console.log('getcomments:', response);
            return response.data as CommentsResponse;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<CommentsResponse>) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default commentsSlice.reducer;
