// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const expAsync = createAsyncThunk(
  'exp/expAsync',   
  async () => {
    const response = await privateAxios.get('api/v2/candidate/getAllExperience'); // call API function
    return response.data.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const expSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(expAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(expAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default expSlice.reducer;