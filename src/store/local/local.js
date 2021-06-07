import {createReducer} from '@reduxjs/toolkit';
import {changeVisibilityModal} from '../action';

const initialState = {
  visibilityModal: false
};

const local = createReducer(initialState, (builder) => {
  builder.addCase(changeVisibilityModal, (state, action) => {
    state.visibilityModal = action.payload;
  });
});

export {local};
