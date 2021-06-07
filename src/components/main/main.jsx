import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import ModalReview from '../modal-review/modal-review';
import ProductPage from '../product-page/product-page';
import {useSelector} from 'react-redux';

const Main = () => {
  const visibilityModal = useSelector((state) => state.LOCAL.visibilityModal);

  return <>
    <Header></Header>
    <ProductPage></ProductPage>
    <Footer></Footer>
    {visibilityModal ? <ModalReview/> : ``}
  </>;
};

export default Main;
