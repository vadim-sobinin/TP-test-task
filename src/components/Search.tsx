import React from 'react'

import searchIcon from "../assets/images/icons/search.svg"

const Search: React.FC = () => {
  return (
    <form className="product-list__form" action="#">
          <input className="product-list__form-input" type="search" placeholder="Поиск..." />
          <button className="product-list__form-btn" type="submit">
            <img src={searchIcon} alt="search"/>
          </button>
        </form>
  )
}

export default Search