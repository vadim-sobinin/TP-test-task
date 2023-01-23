import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import qs from 'qs';
import ListItem from './ListItem';
import Pagination from './Pagination';

import { fetchProduct } from '../redux/slices/productSlice';
import { setFilters } from '../redux/slices/filterSlice';

const CardList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let { items, status } = useSelector((state: any) => state.productSlice);
  const { sort, searchValue, currentPage, searchInputValue, itemsPerPage, activeCategory } =
    useSelector((state: any) => state.filterSlice);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  if (activeCategory !== 'Все') {
    items = items.filter((item: any) => item.category === activeCategory);
  }

  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  React.useEffect(() => {
    if (localStorage.getItem('params')) {
      /* @ts-ignore */
      const params = qs.parse(localStorage.getItem('params'));
      dispatch(
        setFilters({
          ...params,
        }),
      );
    }
  }, []);

  const getProducts = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      /* @ts-ignore */
      fetchProduct({
        sort,
        search,
      }),
    );
  };

  React.useEffect(() => {
    getProducts();
  }, [sort, searchValue]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      currentPage,
      sort,
      activeCategory,
      searchValue,
      searchInputValue,
    });

    localStorage.setItem('params', queryString);
  }, [sort, searchValue, currentPage, searchInputValue, activeCategory]);

  return (
    <div className="product-list__cards">
      <Pagination totalItems={items.length} />
      <div className="product-list__cards-top">
        <div>{t('Photo')}</div>
        <div>{t('Title')}</div>
        <div>{t('Views')}</div>
        <div>{t('Start of rotation')}</div>
        <div>{t('End of rotation')}</div>
      </div>

      {status === 'error' ? (
        <div className="product-list__error-info">
          <h2>{t('An error occurred')} 😕</h2>
          <p>
            {t('Unfortunately, unable to get the product list.')}
            <br />
            {t('Please try again')}
          </p>
        </div>
      ) : (
        <>
          {status === 'success'
            ? currentItems.map((obj: any) => (
                <ListItem
                  key={obj.id}
                  /* @ts-ignore */
                  obj={obj}
                />
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default CardList;
