import React from 'react';

import rusIcon from './assets/images/icons/russia-icon.svg'
import usaIcon from './assets/images/icons/usa-icon.svg'
import arrowDownIcon from './assets/images/icons/arrow-down.svg'
import searchIcon from "./assets/images/icons/search.svg"
import prevIcon from "./assets/images/icons/prev.svg"
import nextIcon from "./assets/images/icons/next.svg"

import "./scss/style.scss"

function App() {
  return (
    <div className="product-list">
    <div className="container">
      <div className="product-list__top">
        <div className="product-list__title">
          Карточки контента
        </div>
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
      </div>
      <div className="product-list__sorting">
        <div className="product-list__sorting-box">
          <span className="product-list__sorting-name">
            Сортировать:
          </span>
          <div className="product-list__sorting-items">
            <button className="product-list__sorting-item active">по названию <img src={arrowDownIcon}
                alt="sort order" /></button>
            <button className="product-list__sorting-item">по просмотрам</button>
            <button className="product-list__sorting-item">по дате начала</button>
            <button className="product-list__sorting-item">по дате окончания</button>
          </div>
        </div>
        <form className="product-list__form" action="#">
          <input className="product-list__form-input" type="search" placeholder="Поиск..." />
          <button className="product-list__form-btn" type="submit">
            <img src={searchIcon} alt="search"/>
          </button>
        </form>
      </div>
      <div className="product-list__cards">
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
        <div className="product-list__cards-top">
          <div>Фото</div>
          <div>Название</div>
          <div>Просмотры</div>
          <div>Начало ротации</div>
          <div>Конец ротации</div>
        </div>
        <a className="product-list__item" href="#">
          <div className="product-list__item-box">
            <div className="product-list__item-imgbox">
              <img src="https:\/\/4lapy.ru\/resize\/800x800\/upload\/iblock\/714\/7140b69c9d49dd89f1d35b1a99e27d18.jpg" alt="product"/>
            </div>
            <div className="product-list__item-content">
              <div className="product-list__item-title">Подушечки с фруктово-ягодным муссом </div>
              <div className="product-list__item-subtitle">Сухие завтраки</div>
            </div>
          </div>
          <div className="product-list__item-views">
            <div className="product-list__item-name">
              Просмотры:
            </div>
            19 232
          </div>
          <div className="product-list__item-startrotation">
            <div className="product-list__item-name">
              Начало ротации:
            </div>
            02.12.2022
          </div>
          <div className="product-list__item-endrotation">
            <div className="product-list__item-name">
              Конец ротации:
            </div>
            12.04.2023
          </div>
        </a>
        <a className="product-list__item" href="#">
          <div className="product-list__item-box">
            <div className="product-list__item-imgbox">
              <img src="https:\/\/menuprosto.ru\/assets\/Images\/Recipe\/RCP_5722.jpg" alt=""/>
            </div>
            <div className="product-list__item-content">
              <div className="product-list__item-title">Сухой корм для взрослых собак мелких и карликовых пород </div>
              <div className="product-list__item-subtitle">Корм для животных</div>
            </div>
          </div>
          <div className="product-list__item-views">
            <div className="product-list__item-name">
              Просмотры:
            </div>
            149 656
          </div>
          <div className="product-list__item-startrotation">
            <div className="product-list__item-name">
              Начало ротации:
            </div>
            02.12.2022
          </div>
          <div className="product-list__item-endrotation">
            <div className="product-list__item-name">
              Конец ротации:
            </div>
            12.04.2023
          </div>
        </a>
        <a className="product-list__item" href="#">
          <div className="product-list__item-box">
            <div className="product-list__item-imgbox">
              <img src="https:\/\/romsann.ru\/wp-content\/uploads\/2020\/04\/%D1%81%D0%BF%D0%B0%D0%B3%D0%B3%D0%B5%D1%82%D0%B8.jpg" alt=""/>
            </div>
            <div className="product-list__item-content">
              <div className="product-list__item-title">Макароны Шебекенские Букатини 350г </div>
              <div className="product-list__item-subtitle">Бакалея</div>
            </div>
          </div>
          <div className="product-list__item-views">
            <div className="product-list__item-name">
              Просмотры:
            </div>
            0
          </div>
          <div className="product-list__item-startrotation">
            <div className="product-list__item-name">
              Начало ротации:
            </div>
            02.12.2022
          </div>
          <div className="product-list__item-endrotation">
            <div className="product-list__item-name">
              Конец ротации:
            </div>
            12.04.2023
          </div>
        </a>
      </div>
    </div>
  </div>
  );
}

export default App;
