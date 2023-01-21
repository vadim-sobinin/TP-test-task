import React from 'react'

import rusIcon from '../assets/images/icons/russia-icon.svg'
import usaIcon from '../assets/images/icons/usa-icon.svg'

const Lang: React.FC = () => {
  return (
    <div className="product-list__langue">
          <button className="product-list__langue-btn langue-ru active">
            <img src={rusIcon} alt="Russian" />
            <span>RU</span>
          </button>
          <button className="product-list__langue-btn langue-en">
            <img src={usaIcon} alt="English" />
            <span>EN</span>
          </button>
        </div>
  )
}

export default Lang