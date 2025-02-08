import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = "https://coursehub-api.vercel.app/courses";

export const fetchData = createAsyncThunk(
    'user/fetchData',
    async () => {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    }
);

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;