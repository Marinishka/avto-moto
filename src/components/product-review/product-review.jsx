import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const getStars = (rating) => {
  return Array(5).fill(0).map((_, i) => <div className="review__icon" key={`star-${i + 1}`}>
    <svg className={`review__icon-star ${(i + 1) <= rating ? `review__icon-star--active` : ``}`} width="17" height="16" viewBox="0 0 17 16">
      <path d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z" fill="#BDBEC2"/>
    </svg>
  </div>);
};

const ProductReview = ({review}) => {
  const {user, dignity, disadvantages, comment, rating} = review;
  return <article className="review">
    <h3 className="visually-hidden">Отзыв</h3>
    <span className="review__user-name">{user}</span>
    <dl className="review__content">
      {dignity
        ? <ReviewItem reviewItemTitle={`dignity`} reviewItemContent={dignity}/>
        : ``}
      {disadvantages
        ? <ReviewItem reviewItemTitle={`disadvantages`} reviewItemContent={disadvantages}/>
        : ``}
      {comment
        ? <ReviewItem reviewItemTitle={`comment`} reviewItemContent={comment}/>
        : ``}
    </dl>
    <div className="review__rating">
      <div className="review__stars">
        {getStars(rating)}
      </div>
      <span className="review__rating-text">Советует</span>
    </div>
    <div className="review__bottom">
      <span className="review__time">1 минуту назад</span>
      <button className="review__btn">Ответить</button>
    </div>
  </article>;
};

ProductReview.propTypes = {
  review: PropTypes.object.isRequired
};

export default ProductReview;
