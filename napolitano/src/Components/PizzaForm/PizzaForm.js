import React from "react";

// Styles
import "./PizzaForm.sass";

function PizzaForm() {
  return (
    <div className="pizza-form">
      <div className="overlay">
        <div className="pizza-form__wrapper">
          <div className="pizza-form__main">
            <div className="pizza-form__image">
              <img src="" alt="" className="pizza-form__img" />
              <div className="pizza-form__header">
                <h4 className="pizza-form__title">Карбонара</h4>
                <span className="pizza-form__weigth">520 г</span>
              </div>
              <div className="pizza-form__sizes">
                <h5 className="pizza-form__title">Розмір:</h5>
                <div className="pizza-form__options">
                  <div className="pizza-form__option active">20 см</div>
                  <div className="pizza-form__option">30 см</div>
                  <div className="pizza-form__option">40 см</div>
                </div>
              </div>
              <div className="pizza-form__dough">
                <h5 className="pizza-form__title">Розмір:</h5>
                <div className="pizza-form__options">
                  <div className="pizza-form__option active">Стандартне</div>
                  <div className="pizza-form__option unavaliable">Тонке</div>
                </div>
              </div>
              <div className="pizza-form__ingredients">
                <div className="pizza-form__title">Інгрідієнти:</div>
                <div className="pizza-form__list">
                  <div className="pizza-form__item">
                    <div className="pizza-form__item-name">
                      Тісто стандартне, 20 см
                    </div>
                    <div className="pizza-form__item-price">25 ₴</div>
                  </div>
                  <div className="pizza-form__item">
                    <div className="pizza-form__item-name">Соус томатний</div>
                    <div className="pizza-form__item-price">16 ₴</div>
                  </div>
                  <div className="pizza-form__item">
                    <div className="pizza-form__item-name">Сир Пармезан</div>
                    <div className="pizza-form__item-price">26 ₴</div>
                  </div>
                  <div className="pizza-form__item">
                    <div className="pizza-form__item-name">Сир Моцарела</div>
                    <div className="pizza-form__item-price">18 ₴</div>
                  </div>
                </div>
                <div className="pizza-form__sum">
                  <span className="pizza-form__sum-name">Разом:</span>
                  <span className="pizza-form-sum-price">329 ₴</span>
                </div>
                <div className="pizza-form__button">
                  <button className="pizza-form__btn">
                    Добавити в корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza-form__ingredients"></div>
        </div>
      </div>
    </div>
  );
}

export default PizzaForm;
