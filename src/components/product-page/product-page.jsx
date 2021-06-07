import React, {useEffect, useState} from 'react';
import Tabs from '../tabs/tabs';
import {loadProduct} from '../../store/action';
import loadedProduct from '../../assets/mock/loadedProduct.js';
import {useSelector, useDispatch} from 'react-redux';
import {Info} from '../../const';
import Slider from '../slider/slider';

const getInfoItems = (info) => {
  let items = [];
  for (const key in info) {
    if (Object.prototype.hasOwnProperty.call(info, key)) {
      items.push(<li key={key} className={`info__item info__item--${key}`} title={Info[key]}>
        {info[key]}
      </li>);
    }
  }
  return items;
};

const ProductPage = () => {
  const dispatch = useDispatch();

  const [isLoading, sedLoading] = useState(true);

  useEffect(() => {
    dispatch(loadProduct(loadedProduct));
    sedLoading(false);
  }, []);
  const product = useSelector((state) => state.DATA.product);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  const {title, price, info} = product;
  return <main className="product">
    <div className="product__upper-block">
      <Slider/>
      <section className="info">
        <h1 className="info__title">{title}</h1>
        <ul className="info__list">
          {getInfoItems(info)}
        </ul>
        <div className="info__pricing">
          <span className="info__price info__price--new">{price.new} &#x20bd;</span>
          <span className="info__price info__price--old">{price.old} &#x20bd;</span>
        </div>
        <button className="info__btn info__btn--request">Оставить заявку</button>
        <button className="info__btn info__btn--credit">В кредит от 11 000 &#x20bd;</button>
      </section>
    </div>
    <Tabs></Tabs>
  </main>;
};

export default ProductPage;
