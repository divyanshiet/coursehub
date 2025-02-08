import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API = "https://coursehub-api.vercel.app/courses";

export const filteredfetchData = createAsyncThunk(
    'user/filteredfetchData',
    async (courseId) => {
        const response = await fetch(`${API}/${courseId}`);
        const data = await response.json();
        return data;
    }
);

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const filteredslice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(filteredfetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(filteredfetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(filteredfetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default filteredslice.reducer;