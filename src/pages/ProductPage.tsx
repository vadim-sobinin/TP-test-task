import axios from 'axios';
import React from 'react';

import { Link, useParams, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import prevIcon from '../assets/images/icons/card-prev.svg';

import Lang from '../components/Lang';
import Rating from '../components/Rating';

const ProductPage: React.FC = () => {
  /* @ts-ignore */
  const { id } = useParams();
  const { t } = useTranslation();

  const [productInfo, setProductInfo] = React.useState<{
    name: string;
    image_url: string;
    logo_url: string;
    disclaimer: string;
    discount: number | string;
    old_price: string[];
    new_price: string[];
    stars: number;
  }>();

  React.useEffect(() => {
    async function fetchProductInfo() {
      try {
        const { data } = await axios.get(
          'https://63b1fc0a5e490925c511e59c.mockapi.io/products/' + id,
        );
        await setProductInfo(data);
      } catch (error) {
        alert(t('Error in receiving product information!'));
        <Redirect to="/" />;
      }
    }
    fetchProductInfo();
  }, []);

  if (!productInfo) {
    return <h1>Загрузка...</h1>;
  }

  if (productInfo) {
    productInfo.old_price = String(productInfo.old_price).split(/[.,]+/);
    productInfo.old_price[1] = productInfo.old_price[1]
      ? productInfo.old_price[1].length === 1
        ? productInfo.old_price[1] + '0'
        : productInfo.old_price[1]
      : '00';

    if (productInfo.new_price) {
      productInfo.new_price = String(productInfo.new_price).split(/[.,]+/);
      productInfo.new_price[1] = productInfo.new_price[1]
        ? productInfo.new_price[1].length === 1
          ? productInfo.new_price[1] + '0'
          : productInfo.new_price[1]
        : '00';
    }
  }

  return (
    <div className="product-card">
      <div className="card-item">
        <div className="container">
          <div className="product-card__top">
            <Link className="card-item__prev" to="/">
              <img src={prevIcon} alt="Go back" />
              <span>{t('Go back')}</span>
            </Link>
            <Lang />
          </div>
          <div className="card-item__wrapper">
            <div className="card-item__top">
              <div
                className={`card-item__top-sale ${productInfo.discount == 0 ? 'no-discount' : ''}`}>
                -{productInfo.discount}%
              </div>

              <div className="card-item__logo">
                <img src={productInfo.logo_url} alt="logo" />
              </div>
            </div>
            <div className="card-item__inner">
              <div className="card-item__imgbox">
                <img src={productInfo.image_url} alt="product" />
              </div>
              <div className="card-item__content">
                <div className="card-item__title">{productInfo.name}</div>
                <Rating stars={productInfo.stars} />
                <div className="card-item__pricebox">
                  <div
                    className={`card-item__price-old ${
                      productInfo.discount == '0' ? 'no-discount' : ''
                    }`}>
                    <span className="card-item__price-oldnum">
                      {productInfo.old_price[0]}
                      <sup>{productInfo.old_price[1]}</sup>₽
                    </span>
                    <span className="card-item__price-olddescr">{t('old price')}</span>
                  </div>

                  <div className="card-item__price-new">
                    <span className="card-item__price-newnum">
                      {productInfo.discount == '0'
                        ? productInfo.old_price[0]
                        : productInfo.new_price[0]}
                      <sup>
                        {productInfo.discount == '0'
                          ? productInfo.old_price[1]
                          : productInfo.new_price[1]}
                      </sup>
                      ₽
                    </span>
                    <span className="card-item__price-newdescr">
                      {productInfo.discount == '0' ? t('price') : t('special offer price')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {productInfo.disclaimer && (
            <div className="card-item__sale">{productInfo.disclaimer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
