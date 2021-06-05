import {createReducer} from '@reduxjs/toolkit';
import {loadProduct} from '../action';

const initialState = {
  product: null
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadProduct, (state, action) => {
    state.product = action.payload;
  });
});

export {data};
