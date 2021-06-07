import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const ProductContacts = () => {
  return <article className="contacts">
    <h2 className="visually-hidden">Наши контакты</h2>
    <dl className="contacts__list">
      <div className="contacts__item">
        <dt className="contacts__title">Адрес</dt>
        <dd className="contacts__text">
          <address className="contacts__address">Санкт-Петербург,
            <span className="contacts__line">набережная реки Карповки, дом 5</span>
          </address>
        </dd>
      </div>
      <div className="contacts__item">
        <dt className="contacts__title">Режим работы</dt>
        <dd className="contacts__text">Ежедневно, с 10:00 до 21:00</dd>
      </div>
      <div className="contacts__item">
        <dt className="contacts__title">Телефон</dt>
        <dd className="contacts__text">
          <a className="contacts__link" href="tel:+78003335599">8 (800) 333-55-99</a>
        </dd>
      </div>
      <div className="contacts__item">
        <dt className="contacts__title">E-mail</dt>
        <dd className="contacts__text">
          <a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </dd>
      </div>
    </dl>
    <div className="contacts__map">
      <YMaps>
        <Map defaultState={{bounds: [[59.970939, 30.311348], [59.964614, 30.334301]]}} width="431px" height="271px">
          <Placemark geometry={[59.968137, 30.316272]} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: [32, 40]}}></Placemark>
        </Map>
      </YMaps>
    </div>
  </article>;
};

export default ProductContacts;
