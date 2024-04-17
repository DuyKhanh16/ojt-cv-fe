// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const educationAsync = createAsyncThunk(
  'education/educationAsync',   
  async () => {
    const response = await privateAxios.get('api/v2/candidate/getAllEducationCandidate'); // call API function
    return response.data.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const educationSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(educationAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(educationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default educationSlice.reducer;