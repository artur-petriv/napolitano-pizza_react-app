import React from "react";
import pizzaImg from "../Content/pizza.jpg";
import arrowSvg from "./arrow.svg";

// Styles
import "./PizzaForm.sass";

function PizzaForm() {
  return (
    <div className="popup">
      <div className="overlay">
        <div className="popup__wrapper">
          <div className="popup__main">
            <div className="popup__image">
              <img src={pizzaImg} alt="" className="popup__img" />
              <div className="popup__header">
                <h4 className="popup__header-title">Карбонара</h4>
                <span className="popup__header-weight">520 г</span>
              </div>
              <div className="popup__sizes">
                <h5 className="popup__title">Розмір:</h5>
                <div className="popup__options">
                  <div className="popup__option active">20 см</div>
                  <div className="popup__option">30 см</div>
                  <div className="popup__option">40 см</div>
                </div>
              </div>
              <div className="popup__dough">
                <h5 className="popup__title">Тісто:</h5>
                <div className="popup__options">
                  <div className="popup__option active">Стандартне</div>
                  <div className="popup__option unavaliable">Тонке</div>
                </div>
              </div>
              <div className="popup__ingredients">
                <div className="popup__title">Інгрідієнти:</div>
                <div className="popup__list">
                  <div className="popup__line">
                    <div className="popup__line-name">
                      Тісто стандартне, 20 см
                    </div>
                    <div className="popup__line-price">25 ₴</div>
                  </div>
                  <div className="popup__line">
                    <div className="popup__line-name">Соус томатний</div>
                    <div className="popup__line-price">16 ₴</div>
                  </div>
                  <div className="popup__line">
                    <div className="popup__line-name">Сир Пармезан</div>
                    <div className="popup__line-price">26 ₴</div>
                  </div>
                  <div className="popup__line">
                    <div className="popup__line-name">Сир Моцарела</div>
                    <div className="popup__line-price">18 ₴</div>
                  </div>
                </div>
                <div className="popup__sum">
                  <span className="popup__sum-name">Разом:</span>
                  <span className="popup__sum-price">329 ₴</span>
                </div>
                <div className="popup__button">
                  <button className="popup__btn">Добавити в корзину</button>
                </div>
              </div>
            </div>
          </div>
          <div className="popup__pick">
            <h5 className="popup__pick-title">Выберіть інгрідієнти для піци</h5>
            <div className="popup__container">
              <div className="popup__pick-header">
                <div className="popup__pick-name">Мясо та ковбаси</div>
                <div className="popup__pick-arrow">
                  <img src={arrowSvg} alt="" className="popup__arrow-svg" />
                </div>
              </div>
              <div className="popup__item">
                <div className="popup__item-name">Салямі</div>
                <div className="popup__item-price">27 ₴</div>
              </div>
              <div className="popup__item">
                <div className="popup__item-name">Прошуто</div>
                <div className="popup__item-price">27 ₴</div>
              </div>
              <div className="popup__item">
                <div className="popup__item-name">Шинка</div>
                <div className="popup__item-price">27 ₴</div>
              </div>
            </div>

            <div className="popup__container">
              <div className="popup__pick-header">
                <div className="popup__pick-name">Овочі і фрукти</div>
                <div className="popup__pick-arrow"></div>
              </div>
            </div>

            <div className="popup__container">
              <div className="popup__pick-header">
                <div className="popup__pick-name">Сири</div>
                <div className="popup__pick-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaForm;
