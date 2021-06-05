import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import ModalReview from '../modal-review/modal-review';
import ProductPage from '../product-page/product-page';

const Main = () => {
  return <>
    <Header></Header>
    <ProductPage></ProductPage>
    <Footer></Footer>
    <ModalReview/>
  </>;
};

export default Main;
