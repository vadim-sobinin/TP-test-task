import React from 'react'

import arrowDownIcon from '../assets/images/icons/arrow-down.svg'

import Search from './Search'

const Sorting: React.FC = () => {
  return (
    <div className="product-list__sorting">
        <div className="product-list__sorting-box">
          <span className="product-list__sorting-name">
            Сортировать:
          </span>
          <div className="product-list__sorting-items">
            <button className="product-list__sorting-item active">по названию <img src={arrowDownIcon}
                alt="sort order" /></button>
            <button className="product-list__sorting-item">по просмотрам</button>
            <button className="product-list__sorting-item">по дате начала</button>
            <button className="product-list__sorting-item">по дате окончания</button>
          </div>
        </div>
        <Search/>
      </div>
  )
}

export default Sorting