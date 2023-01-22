import React from 'react';

import Sorting from '../components/Sorting';
import Lang from '../components/Lang';
import CardList from '../components/CardList';
import Search from '../components/Search';

const HomePage: React.FC = () => {
  return (
    <div className="product-list">
      <div className="container">
        <div className="product-list__top">
          <div className="product-list__title">Карточки контента</div>
          <Lang />
        </div>
        <div className="product-list__sorting">
          <Sorting />
          <Search />
        </div>
        <CardList />
      </div>
    </div>
  );
};

export default HomePage;
