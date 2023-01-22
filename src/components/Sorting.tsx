import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setSortOrder } from '../redux/slices/filterSlice';
import { useTranslation } from 'react-i18next';

import arrowDownIcon from '../assets/images/icons/arrowDown.svg';
import arrowUpIcon from '../assets/images/icons/arrowUp.svg';

type SortItem = {
  name: string;
  sortProperty: string;
  order: string;
};

const Sorting: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.filterSlice.sort);

  const sortCategoryList: SortItem[] = [
    { name: t('by title'), sortProperty: 'name', order: 'asc' },
    { name: t('by views'), sortProperty: 'views', order: 'desc' },
    { name: t('by start date'), sortProperty: 'start_date', order: 'desc' },
    { name: t('by end date'), sortProperty: 'end_date', order: 'desc' },
  ];

  function onClickActive(obj: SortItem) {
    if (sort.sortProperty === obj.sortProperty) {
      dispatch(setSortOrder(sort.order === 'acs' ? 'desc' : 'acs'));
    } else {
      dispatch(setSort(obj));
    }
  }

  return (
    <div className="product-list__sorting-box">
      <span className="product-list__sorting-name">{t('Sorted:')}</span>
      <div className="product-list__sorting-items">
        {sortCategoryList.map((obj, i) => (
          <button
            key={i}
            onClick={() => onClickActive(obj)}
            className={
              sort.sortProperty === obj.sortProperty
                ? 'product-list__sorting-item active'
                : 'product-list__sorting-item'
            }>
            {' '}
            {obj.name}{' '}
            {sort.sortProperty === obj.sortProperty ? (
              <img src={sort.order === 'acs' ? arrowDownIcon : arrowUpIcon} alt="sort order" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
