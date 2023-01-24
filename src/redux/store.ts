import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import filterSlice from './slices/filterSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    productSlice,
    filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
