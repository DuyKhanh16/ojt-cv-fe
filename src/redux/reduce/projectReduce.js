// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const projectAsync = createAsyncThunk(
  'project/projectAsync',   
  async () => {
    const response = await privateAxios.get('api/v2/candidate/getAllProject'); // call API function
    return response.data.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const projectSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(projectAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(projectAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default projectSlice.reducer;