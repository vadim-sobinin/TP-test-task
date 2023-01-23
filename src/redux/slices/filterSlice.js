import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  sort: { name: 'по названию', sortProperty: 'name', order: 'asc' },
  activeCategory: 'Все',
  currentPage: 1,
  searchInputValue: '',
  itemsPerPage: 4,
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
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.searchValue = action.payload.searchValue;
      state.searchInputValue = action.payload.searchInputValue;
      state.activeCategory = action.payload.activeCategory;
    },
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
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
  setItemsPerPage,
  setActiveCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
