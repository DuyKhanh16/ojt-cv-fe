// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import candidateReducer from './reduce/candidateReducer';

export const store = configureStore({
  reducer: {
    candidate: candidateReducer,
  },
});
