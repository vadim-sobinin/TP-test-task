import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setItemsPerPage, setCurrentPage } from '../redux/slices/filterSlice';
import { useTranslation } from 'react-i18next';

const ItemsPerPageBlock: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const itemsPerPage = useSelector((state: any) => state.filterSlice.itemsPerPage);

  const itemsPerPageList = [2, 4, 8, 12];

  function onClickActive(number: number) {
    dispatch(setItemsPerPage(number));
    dispatch(setCurrentPage(1));
  }

  return (
    <div className="product-list__sorting-box">
      <span className="product-list__sorting-name">{t('Show products')}:</span>
      <div className="product-list__sorting-items items-per-page">
        {itemsPerPageList.map((number: number) => (
          <button
            key={number}
            onClick={() => onClickActive(number)}
            className={
              itemsPerPage === number
                ? 'product-list__sorting-item active'
                : 'product-list__sorting-item'
            }>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemsPerPageBlock;
