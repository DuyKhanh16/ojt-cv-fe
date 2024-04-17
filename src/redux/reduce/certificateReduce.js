// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const certificateAsync = createAsyncThunk(
  'certificate/certificateAsync',   
  async () => {
    const response = await privateAxios.get('api/v2/candidate/getAllCertificate'); // call API function
    return response.data.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const certificateSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(certificateAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(certificateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default certificateSlice.reducer;