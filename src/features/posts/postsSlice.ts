import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {type PostsResponse, type PostsState} from "../../shared/types/postsTypes.ts";
import {getPosts} from "./postsAPI.ts";

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getPosts();
            return response.data as PostsResponse;
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
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostsResponse>) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
});

export default postsSlice.reducer;
