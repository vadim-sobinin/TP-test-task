import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const ListItem: React.FC = ({ obj }: any) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <Link ref={ref} className="product-list__item" to={`/product/${obj.id}`}>
      <div className="product-list__item-box">
        <div className="product-list__item-imgbox">
          {inView && <img src={obj['image_url']} alt="product" />}
        </div>
        <div className="product-list__item-content">
          <div className="product-list__item-title">{obj.name}</div>
          <div className="product-list__item-subtitle">{obj.category}</div>
        </div>
      </div>
      <div className="product-list__item-views">
        <div className="product-list__item-name">{t('Views')}:</div>
        {obj.views}
      </div>
      <div className="product-list__item-startrotation">
        <div className="product-list__item-name">{t('Start of rotation')}:</div>
        {obj['start_date']}
      </div>
      <div className="product-list__item-endrotation">
        <div className="product-list__item-name">{t('End of rotation')}:</div>
        {obj['end_date']}
      </div>
    </Link>
  );
};

export default ListItem;
