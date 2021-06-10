import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const getImgsList = (activeImg, imgs) => {

  return imgs.map((img, index) => <li className={`slider__item ${activeImg === index ? `slider__item--active` : ``}`} key={`img-${index}`}>
    <img src={img} width="128" height="80" alt={`Изображение продукта ${index}`}></img>
  </li>);
};

const Slider = () => {
  const [activeImg, setActiveImg] = useState(0);

  const product = useSelector((state) => state.DATA.product);

  const {pictures, isNew} = product;

  const onNextImgClick = () => {
    setActiveImg(activeImg + 1);
  };

  const onPreviousImgClick = () => {
    setActiveImg(activeImg - 1);
  };

  return <div className="slider">
    <div className="slider__active-img">
      <div className={`slider__flag ${!isNew ? `visually-hidden` : ``}`}>New model</div>
      <img src={pictures[activeImg]} width="600" height="375" alt={`Изображение продукта ${activeImg}`}></img>
    </div>
    <div className="slider__bar">
      <button className="slider__btn slider__btn--up" onClick={onPreviousImgClick} disabled={activeImg === 0 ? true : false} aria-label="Предыдущее изображение">
        <svg className={`slider__icon ${activeImg === 0 ? `slider__icon--disable` : ``}`} width="20" height="13" viewBox="0 0 20 13">
          <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" stroke="#48494D"/>
        </svg>
      </button>
      <ul className="slider__img-list">
        {getImgsList(activeImg, pictures)}
      </ul>
      <button className="slider__btn slider__btn--down" onClick={onNextImgClick} disabled={activeImg === pictures.length - 1 ? true : false} aria-label="Следующее изображение">
        <svg className={`slider__icon ${activeImg === pictures.length - 1 ? `slider__icon--disable` : ``}`} width="20" height="13" viewBox="0 0 20 13">
          <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
        </svg>
      </button>
    </div>
  </div>;
};

export default Slider;
