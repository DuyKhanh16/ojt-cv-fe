// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const skillAsync = createAsyncThunk(
  'skill/skillAsync',   
  async () => {
    const response = await privateAxios.get('api/v2/candidate/getAllSkills');
    return response.data.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const skillSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(skillAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(skillAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default skillSlice.reducer;