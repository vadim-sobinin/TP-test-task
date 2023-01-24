import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import qs from 'qs';
import ListItem from './ListItem';
import Pagination from './Pagination';

import { fetchProduct } from '../redux/slices/productSlice';
import { setFilters } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';

export interface ItemType {
  id: string;
  name: string;
  image_url: string;
  logo_url: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
  discount: number | string;
  stars: number;
  old_price: number | string;
  new_price: number | string;
  disclaimer: string;
}

type ItemStateType = {
  items: ItemType[];
  status: string;
};

const CardList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  let { items, status }: ItemStateType = useSelector((state: any) => state.productSlice);
  const { sort, searchValue, currentPage, searchInputValue, itemsPerPage, activeCategory } =
    useSelector((state: any) => state.filterSlice);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  if (activeCategory !== 'Все') {
    items = items.filter((item) => item.category === activeCategory);
  }

  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  React.useEffect(() => {
    if (localStorage.getItem('params')) {
      const params = qs.parse(localStorage.getItem('params') || '');
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
            ? currentItems.map((obj) => <ListItem key={obj.id} obj={obj} />)
            : null}
        </>
      )}
    </div>
  );
};

export default CardList;
