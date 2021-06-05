import React from 'react';

import {useSelector} from 'react-redux';
import SpecificationItem from '../specification-item/specification-item';

const getSpecificationList = (specifications) => {
  let items = [];
  for (const key in specifications) {
    if (Object.prototype.hasOwnProperty.call(specifications, key)) {
      items.push(<SpecificationItem key={key} value={specifications[key]} title={key}/>);
    }
  }
  return items;
};

const ProductSpecifications = () => {
  const product = useSelector((state) => state.DATA.product);

  const {specifications} = product;

  return <section className="specifications">
    <h2 className="specifications__title visually-hidden">Характеристики</h2>
    <dl className="specifications__list">
      {getSpecificationList(specifications)}
    </dl>
  </section>;
};

export default ProductSpecifications;
