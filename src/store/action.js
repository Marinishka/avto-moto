import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PRODUCT: `data/loadProduct`,
  ADD_REVIEW: `data/addReview`,
  CHANGE_VISIBILITY_MODAL: `local/changeVisibilityModal`
};

export const loadProduct = createAction(ActionType.LOAD_PRODUCT, (product) => {
  return {
    payload: product
  };
});

export const changeVisibilityModal = createAction(ActionType.CHANGE_VISIBILITY_MODAL, (visibility) => {
  return {
    payload: visibility
  };
});

export const addReview = createAction(ActionType.ADD_REVIEW, (review) => {
  return {
    payload: review
  };
});
