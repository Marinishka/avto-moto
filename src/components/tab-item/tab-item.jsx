import React from 'react';
import PropTypes from 'prop-types';

const TabItem = ({tabTitle, isTabActive}) => {
  return <li className="tabs__item">
    <a data-tab={tabTitle} className={`tabs__link ${isTabActive ? `tabs__link--active` : ``}`}>{tabTitle}</a>
  </li>;
};

TabItem.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  isTabActive: PropTypes.bool.isRequired
};

export default TabItem;
