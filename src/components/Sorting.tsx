import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setSortOrder } from '../redux/slices/filterSlice';

import arrowDownIcon from '../assets/images/icons/arrowDown.svg';
import arrowUpIcon from '../assets/images/icons/arrowUp.svg';

type SortItem = {
  name: string;
  sortProperty: string;
  order: string;
};

export const sortCategoryList: SortItem[] = [
  { name: 'по названию', sortProperty: 'name', order: 'asc' },
  { name: 'по просмотрам', sortProperty: 'views', order: 'desc' },
  { name: 'по дате начала', sortProperty: 'start_date', order: 'desc' },
  { name: 'по дате окончания', sortProperty: 'end_date', order: 'desc' },
];

const Sorting: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.filterSlice.sort);

  function onClickActive(obj: SortItem) {
    if (sort.sortProperty === obj.sortProperty) {
      dispatch(setSortOrder(sort.order === 'acs' ? 'desc' : 'acs'));
    } else {
      dispatch(setSort(obj));
    }
  }

  return (
    <div className="product-list__sorting-box">
      <span className="product-list__sorting-name">Сортировать:</span>
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
