import React from 'react';
import ReactDOM from 'react-dom';
import{configureStore} from "@reduxjs/toolkit";

import{Provider} from "react-redux";
import {productsApi} from './features/productsApi';
import App from './App';
import productsReducer,{productsFetch} from "./features/ProductsSlice";
import cartReducer, { getTotals } from "./features/cartSlice";
import authReducer from"./features/authSlice";
const store=configureStore({
  reducer:{
    products:productsReducer,
    cart:cartReducer,
    auth:authReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(productsApi.middleware);
  }
})
store.dispatch(productsFetch());
store.dispatch(getTotals());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

