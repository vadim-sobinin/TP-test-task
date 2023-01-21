import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from './ListItem';
import Pagination from './Pagination';

import { fetchProduct } from '../redux/slices/productSlice';

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: any) => state.productSlice);
  const { sort, searchValue } = useSelector((state: any) => state.filterSlice);

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

  return (
    <div className="product-list__cards">
      <Pagination />
      <div className="product-list__cards-top">
        <div>Фото</div>
        <div>Название</div>
        <div>Просмотры</div>
        <div>Начало ротации</div>
        <div>Конец ротации</div>
      </div>

      {status === 'error' ? (
        <div className="product-list__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не получилось получить список продуктов.
            <br />
            Пожалуйста, повторите попытку позже или обратитесь к техническому специалисту.
          </p>
        </div>
      ) : (
        <>
          {status === 'success'
            ? items.map((obj: any) => (
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
