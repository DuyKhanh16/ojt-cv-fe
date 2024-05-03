// src/features/postsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';// import function to fetch data
import privateAxios from '../../config/private.axios';

export const inforCompanyAsync = createAsyncThunk(
  'inforCompany/inforCompanyAsync',   
  async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
    const response = await privateAxios.get('api/v2/companies/getInfor'); 
    // call API function
    return response.data.data;
    }
  }
);

const initialState = {
  data: [],
  status: 'idle',
};

const inforCompanySlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(inforCompanyAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(inforCompanyAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default inforCompanySlice.reducer;