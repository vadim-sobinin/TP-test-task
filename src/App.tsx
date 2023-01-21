import React from 'react';
import "./scss/style.scss"

import Sorting from './components/Sorting';
import Lang from './components/Lang';
import CardList from './components/CardList';

const App: React.FC = () => {
  return (
    <div className="product-list">
      <div className="container">
        <div className="product-list__top">
          <div className="product-list__title">
            Карточки контента
          </div>
          <Lang/>
        </div>
        <Sorting />
        <CardList/>
      </div>
    </div>
  );
}

export default App;
