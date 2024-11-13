import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import userSlice from './userSlice';

// Configure and export the store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    users: userSlice.reducer
  },
});

export default store;
