import React, {useState} from 'react';
import {TabsTitles} from '../../const';
import ProductContacts from '../product-contacts/product-contacts';
import ProductReviews from '../product-reviews/product-reviews';
import ProductSpecifications from '../product-specifications/product-specifications';
import TabItem from '../tab-item/tab-item';

const getActiveElement = (activeTab) => {
  switch (activeTab) {
    case TabsTitles.SPECIFICATIONS:
      return <ProductSpecifications/>;
    case TabsTitles.REVIEWS:
      return <ProductReviews/>;
    case TabsTitles.CONTACTS:
      return <ProductContacts/>;
    default: return <ProductSpecifications/>;
  }
};

const getTabItems = (activeTab) => {
  let tabs = [];
  for (let tabTitle in TabsTitles) {
    if (Object.prototype.hasOwnProperty.call(TabsTitles, tabTitle)) {
      tabs.push(<TabItem key={TabsTitles[tabTitle]} tabTitle={TabsTitles[tabTitle]} isTabActive={activeTab === TabsTitles[tabTitle] ? true : false}></TabItem>);
    }
  }
  return tabs;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabsTitles.SPECIFICATIONS);

  const handleActiveTabChange = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return <div className="tabs">
    <ul className="tabs__list" onClick={(evt) => handleActiveTabChange(evt.target.dataset.tab)}>
      {getTabItems(activeTab)}
    </ul>
    {getActiveElement(activeTab)}
  </div>;
};

export default Tabs;
