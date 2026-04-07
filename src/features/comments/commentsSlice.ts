import type { Comment, CommentsResponse, commentState } from "../../shared/types/commentsTypes.ts";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getComments, getLimitComments } from "./commentsAPI.ts";


const initialState: commentState = {
    byPostId: {},
    loading: {},
    totalCount: {},
    error: {},
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

export const fetchLimitComments = createAsyncThunk<
    { comments: Comment[]; totalCount: number },
    { postId: number, page: number, limit: number }
>(
    "comments/fetchLimitComments",
    async (params, { rejectWithValue }) => {
        try {
            const response = await getLimitComments(params.postId, params.page, params.limit);
            const totalCount = response.headers['x-total-count'] || response.headers['X-Total-Count'];
            return {
                comments: response.data,
                totalCount: Number(totalCount)
            };
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
            // .addCase(fetchComments.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(fetchComments.fulfilled, (state, action: PayloadAction<CommentsResponse>) => {
            //     state.loading = false;
            //     state.comments = action.payload;
            // })
            // .addCase(fetchComments.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload as string;
            // })
            //LIMIT COMMENTS
            .addCase(fetchLimitComments.pending, (state, action) => {
                const { postId } = action.meta.arg;
                state.loading[postId] = true;
                state.error[postId] = null;
            })
            .addCase(fetchLimitComments.fulfilled, (state, action) => {
                const { postId, page } = action.meta.arg;
                const { comments, totalCount } = action.payload;

                state.loading[postId] = false;
                state.totalCount[postId] = totalCount;

                if (!state.byPostId[postId]) {
                    state.byPostId[postId] = [];
                }

                const existingIds = new Set(state.byPostId[postId].map((c: Comment) => c.id));
                const newComments = comments.filter((c: Comment) => !existingIds.has(c.id));

                if (page === 1 && state.byPostId[postId].length === 0) {
                    state.byPostId[postId] = comments;
                } else {
                    state.byPostId[postId].push(...newComments);
                }
            })
            .addCase(fetchLimitComments.rejected, (state, action) => {
                const { postId } = action.meta.arg;
                state.loading[postId] = false;
                state.error[postId] = action.payload as string;
            })
    }
})

export default commentsSlice.reducer;
