import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../const';

const Header = () => {
  return <div className="header">
    <header className="header__container">
      <Link className="header__logo" to={Routes.MAIN}>
        <img className="header__img" src="img/logo.png" width="134" height="55" alt="Логотип Avto Moto"></img>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="/">Автомобили</a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">Контакты</a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">Услуги</a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">Вакансии</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>;
};

export default Header;
