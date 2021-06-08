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

  const openModal = (evt) => {
    evt.preventDefault();
    dispatch(changeVisibilityModal(true));
    document.body.classList.add(`overflow--hidden`);
  };

  return <section className="reviews">
    <h2 className="visually-hidden">Отзывы</h2>
    <a href="#" className="reviews__btn" onClick={openModal}>Оставить отзыв</a>
    {getReviewsList(reviews)}
  </section>;
};

export default ProductReviews;
