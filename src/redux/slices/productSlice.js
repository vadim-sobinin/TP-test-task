import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async ({ sort, search }) => {
  const result = {};
  const { data } = await axios.get(
    `https://63b1fc0a5e490925c511e59c.mockapi.io/products?${search}&sortBy=${sort.sortProperty}&order=${sort.order}`,
  );
  result[0] = data;

  const uniqueCategory = await new Set(data.map((item) => item.category));
  result[1] = ['Все', ...uniqueCategory];
  return result;
});

const initialState = {
  items: [],
  status: 'loading',
  categoryList: [],
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
      state.items = action.payload[0];
      state.categoryList = action.payload[1];
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
