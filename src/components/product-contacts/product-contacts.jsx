import React from 'react';

const ProductContacts = () => {
  return <article className="contacts">
    <h2 className="visually-hidden">Наши контакты</h2>
    <dl>
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
  </article>;
};

export default ProductContacts;
