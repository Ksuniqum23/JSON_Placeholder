import type {UsersState} from "../../shared/types/usersTypes.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./usersAPI.ts";

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getUsers();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const  usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default usersSlice.reducer;
