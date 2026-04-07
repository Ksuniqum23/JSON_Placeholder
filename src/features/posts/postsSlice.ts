import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { Post, PostsState } from "../../shared/types/postsTypes.ts";
import {getLimitPosts} from "./postsAPI.ts";

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
    totalCount: null,
}

export const fetchLimitPosts = createAsyncThunk<
    { posts: Post[]; totalCount: number },  // тип возвращаемого значения
    { page: number; limit: number }          // тип параметров
>(
    'posts/fetchLimitPosts',
    async (params, { rejectWithValue }) => {
        try {
            const response = await getLimitPosts(params.page, params.limit);
            const totalCount = response.headers['x-total-count'] || response.headers['X-Total-Count'];
            return {
                posts: response.data,
                totalCount: Number(totalCount)
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLimitPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLimitPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload.posts;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchLimitPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
});

export default postsSlice.reducer;
