import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeVisibilityModal} from '../../store/action';
import ProductReview from '../product-review/product-review';

const getReviewsList = (reviews) => {
  return reviews.map((review) => <ProductReview key={review.user} review={review}/>);
};

const ProductReviews = () => {
  const product = useSelector((state) => state.DATA.product);

  const dispatch = useDispatch();

  const {reviews} = product;

  const openModal = () => {
    dispatch(changeVisibilityModal(true));
  };

  return <section className="reviews">
    <h2 className="visually-hidden">Отзывы</h2>
    <button className="reviews__btn" onClick={openModal}>Оставить отзыв</button>
    {getReviewsList(reviews)}
  </section>;
};

export default ProductReviews;
