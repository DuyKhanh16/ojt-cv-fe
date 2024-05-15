// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const getJobAppliedAsync = createAsyncThunk(
  'getJobApplied/getJobAppliedAsync',   
  async (id) => {
    console.log(id)
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
    const response = await privateAxios.get(`/api/v2/jobs/getJobAppliedCandidatesbyId/${id}`); // call API function
    console.log(response.data)
    return response.data;
    }
    
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const getJobAppliedSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobAppliedAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getJobAppliedAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default getJobAppliedSlice.reducer;