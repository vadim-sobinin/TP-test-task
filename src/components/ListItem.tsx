import React from 'react'



const ListItem: React.FC = ({obj}: any) => {
  return (
    <a className="product-list__item" href="#">
          <div className="product-list__item-box">
            <div className="product-list__item-imgbox">
              <img src={obj["image_url"]} alt="product"/>
            </div>
            <div className="product-list__item-content">
              <div className="product-list__item-title">{obj.name}</div>
              <div className="product-list__item-subtitle">{obj.category}</div>
            </div>
          </div>
          <div className="product-list__item-views">
            <div className="product-list__item-name">
              Просмотры:
            </div>
            {obj.views}
          </div>
          <div className="product-list__item-startrotation">
            <div className="product-list__item-name">
              Начало ротации:
            </div>
            {obj["start_date"]}
          </div>
          <div className="product-list__item-endrotation">
            <div className="product-list__item-name">
              Конец ротации:
            </div>
            {obj["end_date"]}
          </div>
        </a>
  )
}

export default ListItem