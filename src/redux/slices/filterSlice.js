import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  sort: { name: 'по названию', sortProperty: 'name', order: 'asc' },
  currentPage: 1,
  searchInputValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchInputValue(state, action) {
      state.searchInputValue = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSortOrder(state, action) {
      state.sort.order = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.searchValue = action.payload.searchValue;
      state.searchInputValue = action.payload.searchInputValue;
    },
  },
});

export const {
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
  setSearchInputValue,
  setSortOrder,
} = filterSlice.actions;

export default filterSlice.reducer;
