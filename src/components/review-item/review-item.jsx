import React from 'react';
import PropTypes from 'prop-types';
import {ReviewItemTitles} from '../../const';

const ReviewItem = ({reviewItemTitle, reviewItemContent}) => {
  return <div className={`review__item ${reviewItemTitle === `comment` ? `review__item--comment` : ``}`}>
    <dt className={`review__title review__title--${reviewItemTitle}`}>{ReviewItemTitles[reviewItemTitle]}</dt>
    <dd className="review__text">{reviewItemContent}</dd>
  </div>;
};

ReviewItem.propTypes = {
  reviewItemContent: PropTypes.string.isRequired,
  reviewItemTitle: PropTypes.string.isRequired
};

export default ReviewItem;
