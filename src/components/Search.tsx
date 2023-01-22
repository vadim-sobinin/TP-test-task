import React from 'react';
import debounce from 'lodash.debounce';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSearchInputValue } from '../redux/slices/filterSlice';

import searchIcon from '../assets/images/icons/search.svg';

const Search: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { searchInputValue } = useSelector((state: any) => state.filterSlice);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChangeInput = (event: any) => {
    dispatch(setSearchInputValue(event.target.value));
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  return (
    <form className="product-list__form" action="#">
      <input
        className="product-list__form-input"
        type="search"
        /* @ts-ignore */
        placeholder={t('Search...')}
        ref={inputRef}
        value={searchInputValue}
        onChange={(e) => onChangeInput(e)}
      />
      <button className="product-list__form-btn" type="submit">
        <img src={searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default Search;
