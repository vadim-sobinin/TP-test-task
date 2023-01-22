import React from 'react';
import { useTranslation } from 'react-i18next';

import rusIcon from '../assets/images/icons/russia-icon.svg';
import usaIcon from '../assets/images/icons/usa-icon.svg';

const Lang: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="product-list__langue">
      <button
        onClick={() => changeLanguage('en')}
        className={`product-list__langue-btn langue-ru ${i18n.language === 'ru' ? 'active' : ''}`}>
        <img src={rusIcon} alt="Russian" />
        <span>RU</span>
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`product-list__langue-btn langue-en ${i18n.language === 'en' ? 'active' : ''}`}>
        <img src={usaIcon} alt="English" />
        <span>EN</span>
      </button>
    </div>
  );
};

export default Lang;
