import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundBlock: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="not-found not-found__wrapper">
      <div className="not-found__block">
        <h1>
          <span>😕</span>
          <br />
          {t('Page not found :(')}
        </h1>
        <span className="not-found__description">{t('Sorry, not available')}</span>
        <Link to="/" className="not-found__go-back card-item__prev">
          <img src="images/icons/card-prev.svg" alt="" />
          <span>{t('Go back')}</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundBlock;
