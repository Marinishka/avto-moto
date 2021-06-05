import React from 'react';

import {useSelector} from 'react-redux';
import ProductReview from '../product-review/product-review';

const getReviewsList = (reviews) => {
  return reviews.map((review) => <ProductReview key={review.user} review={review}/>);
};

const ProductReviews = () => {
  const product = useSelector((state) => state.DATA.product);

  const {reviews} = product;

  return <section className="reviews">
    <h2 className="visually-hidden">Отзывы</h2>
    <button className="reviews__btn">Оставить отзыв</button>
    {getReviewsList(reviews)}
  </section>;
};

export default ProductReviews;
