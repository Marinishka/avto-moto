import {createReducer} from '@reduxjs/toolkit';
import {addReview, loadProduct} from '../action';

const initialState = {
  product: null
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadProduct, (state, action) => {
    state.product = action.payload;
  });
  builder.addCase(addReview, (state, action) => {
    return {
      ...state,
      product: {
        ...state.product,
        "reviews": [
          ...state.product[`reviews`],
          action.payload
        ]
      }
    };
  });
});

export {data};
