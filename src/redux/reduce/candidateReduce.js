// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const candidateAsync = createAsyncThunk(
  'candidate/candidateAsync',   
  async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
    const response = await privateAxios.get('api/v2/candidates/getInfor'); // call API function
    return response.data.data;
    }
    
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const candidateSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(candidateAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(candidateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default candidateSlice.reducer;