import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_PRODUCT: `data/loadProduct`
};

export const loadProduct = createAction(ActionType.LOAD_PRODUCT, (product) => {
  return {
    payload: product
  };
});
