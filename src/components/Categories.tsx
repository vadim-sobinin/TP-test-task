import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/filterSlice';

const Categories: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { activeCategory } = useSelector((state: any) => state.filterSlice);
  const categoryList = useSelector((state: any) => state.productSlice.categoryList);

  const categoryRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  function onClickActive(categoryName: string) {
    dispatch(setActiveCategory(categoryName));
    setOpen(false);
  }

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.category')) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const openPopupHandler = () => {
    setOpen(!open);
  };

  return (
    <div ref={categoryRef} className="category">
      <div className="category__label">
        <b>{t('Categories')}:</b>
        <span onClick={openPopupHandler}>{activeCategory}</span>
      </div>
      {open && (
        <div className="category__popup">
          <ul>
            {categoryList.map((category: string) => (
              <li
                key={category}
                onClick={() => onClickActive(category)}
                className={activeCategory === category ? 'active' : ''}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Categories;
