import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
  const { data } = await axios.get(`https://63b1fc0a5e490925c511e59c.mockapi.io/products`);
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchProduct.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = productSlice.actions;
export const selectPizza = (state) => state.productSlice;
export default productSlice.reducer;
