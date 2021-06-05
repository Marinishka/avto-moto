import React, {useState, useRef, useEffect} from 'react';

const getStars = (numStarOn) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
        <label className="add-review__star" key={`star-${i}`}>
          <input className="visually-hidden add-review__radio" type="radio" defaultChecked={numStarOn === i ? true : false} value={i}></input>
          <svg className={`add-review__icon-star ${i <= numStarOn ? `add-review__icon-star--on` : ``}`} width="27" height="25" viewBox="0 0 27 25">
            <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
          </svg>
        </label>
    );
  }
  return stars;
};

const ModalReview = () => {
  const [isClose, setClose] = useState(true);
  const [starOn, setStarOn] = useState(0);
  const inputName = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const onRatingClick = (evt) => {
    setStarOn(evt.target.value);
  };

  const onCloseClick = () => {
    setClose(true);
  };

  return <section className={`add-review ${isClose ? `add-review--close` : ``}`}>
    <div className="add-review__container">
      <h2 className="add-review__title">Оставить отзыв</h2>
      <button className="add-review__close" aria-label="Закрыть окно" onClick={onCloseClick}>
        <span className="visually-hidden">Закрыть окно</span>
      </button>
      <form className="add-review__form">
        <div className="add-review__column">
          <span className="add-review__warning">Пожалуйста, заполните поле</span>
          <label className="add-review__label add-review__label--required"><span className="visually-hidden">Введите имя</span>
            <input className="add-review__input" placeholder="Имя" name="name" type="text" ref={inputName} aria-label="Имя" required></input>
          </label>
          <label className="add-review__label"><span className="visually-hidden">Введите достоинства товара</span>
            <input className="add-review__input" placeholder="Достоинства" name="dignity" type="text" aria-label="Достоинства"></input>
          </label>
          <label className="add-review__label"><span className="visually-hidden">Введите недостатки товара</span>
            <input className="add-review__input" placeholder="Недостатки" name="disadvantages" type="text" aria-label="Недостатки"></input>
          </label>
        </div>
        <div className="add-review__column">
          <fieldset className="add-review__rating" onChange={onRatingClick}>
            <label className="add-review__rating-text">Оцените товар:</label>
            <div className="add-review__stars">
              {getStars(starOn)}
            </div>
          </fieldset>
          <label className="add-review__label add-review__label--required"><span className="visually-hidden">Ваш комментарий</span>
            <textarea className="add-review__textarea" placeholder="Комментарий" name="comment" type="text" aria-label="Комментарий" required></textarea>
          </label>
        </div>
        <button className="add-review__btn" type="submit" aria-label="Остаить отзыв">Оставить отзыв</button>
      </form>
    </div>
  </section>;
};

export default ModalReview;
