import React from 'react';
import {SpecificationItems} from '../../const';
import PropTypes from 'prop-types';

const getTitle = (title) => {
  return SpecificationItems[title];
};

const SpecificationItem = ({title, value}) => {
  return <div className="specifications__row">
    <dt className="specifications__term">{getTitle(title)}</dt>
    <dd className="specifications__value">{value}</dd>
  </div>;
};

SpecificationItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SpecificationItem;
