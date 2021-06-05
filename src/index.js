import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './components/app/App.jsx';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store/root-reducer';
import {Provider} from 'react-redux';
import './assets/scss/index.scss';

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById(`root`)
);
