import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundBlock: React.FC = () => {
  return (
    <div className="not-found not-found__wrapper">
      <div className="not-found__block">
        <h1>
          <span>😕</span>
          <br />
          Страница не найдена :(
        </h1>
        <span className="not-found__description">
          К сожалению, эта страница не доступна. Пожалуйста проверьте адрес страницы...
        </span>
        <Link to="/" className="not-found__go-back card-item__prev">
          <img src="images/icons/card-prev.svg" alt="" />
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
