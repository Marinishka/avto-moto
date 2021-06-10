import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {KeyCode} from '../../const';
import {addReview, changeVisibilityModal} from '../../store/action';

const getStars = (numStarOn) => {
  return Array(5).fill(0).map((_, i) => <label tabIndex="0" className="add-review__star" key={`star-${i + 1}`}>
    <input className="visually-hidden add-review__radio" type="radio" defaultChecked={numStarOn === i + 1 ? true : false} value={i + 1}></input>
    <svg className={`add-review__icon-star ${i + 1 <= numStarOn ? `add-review__icon-star--on` : ``}`} width="27" height="25" viewBox="0 0 27 25">
      <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
    </svg>
  </label>);
};

const ModalReview = () => {
  const [starOn, setStarOn] = useState(0);
  const inputName = useRef(null);
  const inputComment = useRef(null);

  const [name, setName] = useState(``);
  const [dignity, setDignity] = useState(``);
  const [disadvantages, setDisadvantages] = useState(``);
  const [comment, setComment] = useState(``);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(changeVisibilityModal(false));
    document.body.classList.remove(`overflow--hidden`);
  };

  const onEscPress = (evt) => {
    if (evt.keyCode === KeyCode.ESCAPE) {
      closeModal();
    }
  };

  const onOverlayClick = (evt) => {
    if (evt.target.classList.contains(`add-review`)) {
      closeModal();
    }
  };

  useEffect(() => {
    inputName.current.focus();
    document.addEventListener(`keydown`, onEscPress);
    return () => {
      document.removeEventListener(`keydown`, onEscPress);
      document.body.classList.remove(`overflow--hidden`);
    };
  }, []);

  const onRatingClick = (evt) => {
    setStarOn(evt.target.value);
  };

  const onCloseClick = () => {
    closeModal();
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    inputName.current.classList.remove(`add-review__input--warning`);
    inputComment.current.classList.remove(`add-review__textarea--warning`);
    if (name === `` && comment === ``) {
      inputName.current.classList.add(`add-review__input--warning`);
      inputComment.current.classList.add(`add-review__textarea--warning`);
      return;
    }
    if (name === ``) {
      inputName.current.classList.add(`add-review__input--warning`);
      return;
    }
    if (comment === ``) {
      inputComment.current.classList.add(`add-review__textarea--warning`);
      return;
    }
    dispatch(addReview({"user": name, "dignity": dignity, "disadvantages": disadvantages, "comment": comment, "rating": starOn}));
    closeModal();
  };

  return <section className="add-review" onClick={onOverlayClick}>
    <div className="add-review__container">
      <h2 className="add-review__title">Оставить отзыв</h2>
      <button className="add-review__close" aria-label="Закрыть окно" onClick={onCloseClick}>
        <span className="visually-hidden">Закрыть окно</span>
      </button>
      <form className="add-review__form" onSubmit={onSubmit} noValidate>
        <div className="add-review__column">
          <span className="add-review__warning">Пожалуйста, заполните поле</span>
          <label className="add-review__label add-review__label--required"><span className="visually-hidden">Введите имя</span>
            <input className="add-review__input" placeholder="Имя" name="name" type="text" ref={inputName} aria-label="Имя" onChange={({target}) => setName(target.value)} required></input>
          </label>
          <label className="add-review__label"><span className="visually-hidden">Введите достоинства товара</span>
            <input className="add-review__input" placeholder="Достоинства" name="dignity" type="text" aria-label="Достоинства" onChange={({target}) => setDignity(target.value)}></input>
          </label>
          <label className="add-review__label"><span className="visually-hidden">Введите недостатки товара</span>
            <input className="add-review__input" placeholder="Недостатки" name="disadvantages" type="text" aria-label="Недостатки" onChange={({target}) => setDisadvantages(target.value)}></input>
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
            <textarea className="add-review__textarea" placeholder="Комментарий" name="comment" type="text" aria-label="Комментарий" onChange={({target}) => setComment(target.value)} ref={inputComment} required></textarea>
          </label>
        </div>
        <button className="add-review__btn" type="submit" aria-label="Оставить отзыв">Оставить отзыв</button>
      </form>
    </div>
  </section>;
};

export default ModalReview;
