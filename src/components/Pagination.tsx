import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import prevIcon from '../assets/images/icons/prev.svg';
import nextIcon from '../assets/images/icons/next.svg';
import { setCurrentPage } from '../redux/slices/filterSlice';

type PaginationProps = {
  totalItems: number;
};

const Pagination: React.FC<PaginationProps> = ({ totalItems }) => {
  const pageNumbers = [];
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state: any) => state.filterSlice);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const setPrevPage = () => {
    currentPage > 1
      ? dispatch(setCurrentPage(currentPage - 1))
      : dispatch(setCurrentPage(currentPage));
  };
  const setNextPage = () => {
    currentPage < pageNumbers.length
      ? dispatch(setCurrentPage(currentPage + 1))
      : dispatch(setCurrentPage(currentPage));
  };

  return (
    <div className="product-list__pagination">
      {/* @ts-ignore */}
      <ul className="product-list__pagination-list">
        <li className="product-list__pagination-prev" onClick={setPrevPage}>
          <button>
            <img src={prevIcon} alt="prev" />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage
                ? 'product-list__pagination-item current'
                : 'product-list__pagination-item'
            }
            onClick={() => {
              paginate(number);
            }}>
            <span>{number}</span>
          </li>
        ))}

        <li className="product-list__pagination-next" onClick={setNextPage}>
          <button>
            <img src={nextIcon} alt="next" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
