import React from 'react'

import prevIcon from "../assets/images/icons/prev.svg"
import nextIcon from "../assets/images/icons/next.svg"

const Pagination: React.FC = () => {
  return (
    <div className="product-list__pagination">
          <ul className="product-list__pagination-list">
            <li className="product-list__pagination-prev">
              <a href="#">
                <img src={prevIcon} alt="prev"/>
              </a>
            </li>
            <li className="product-list__pagination-item current">
              <span>1</span>
            </li>
            <li className="product-list__pagination-item">
              <a href="#">2</a>
            </li>
            <li className="product-list__pagination-item">
              <a href="#">3</a>
            </li>
            <li className="product-list__pagination-next">
              <a href="#">
                <img src={nextIcon} alt="next"/>
              </a>
            </li>
          </ul>
        </div>
  )
}

export default Pagination