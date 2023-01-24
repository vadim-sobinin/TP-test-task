import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SortItemType } from '../../components/Sorting';
import { RootState } from '../store';
import { ItemType } from '../../components/CardList';

type FetchProductType = {
  sort: SortItemType;
  search: string;
};

type DataType = { data: ItemType[] };

interface ProductSliceState {
  items: ItemType[];
  status: 'loading' | 'success' | 'error';
  categoryList: string[];
}

type ReasultType = [ItemType[], string[]];

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async ({ sort, search }: FetchProductType) => {
    const result = [];
    const { data }: DataType = await axios.get<ItemType[]>(
      `https://63b1fc0a5e490925c511e59c.mockapi.io/products?${search}&sortBy=${sort.sortProperty}&order=${sort.order}`,
    );
    result[0] = data;

    const uniqueCategory = await new Set(data.map((item: ItemType) => item.category));
    result[1] = ['Все', Array.from(uniqueCategory)];
    return result as ReasultType;
  },
);

const initialState: ProductSliceState = {
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
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload[0];
      state.categoryList = action.payload[1];
      state.status = 'success';
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = productSlice.actions;
export const selectPizza = (state: RootState) => state.productSlice;
export default productSlice.reducer;
