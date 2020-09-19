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
          <div className="popup__close">
            <svg
              className="popup__close-svg"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 492 492"
            >
              <g>
                <path
                  d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"
                />
              </g>
            </svg>
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
                <div className="popup__pick-arrow">
                  <img src={arrowSvg} alt="" className="popup__arrow-svg" />
                </div>
              </div>
            </div>

            <div className="popup__container">
              <div className="popup__pick-header">
                <div className="popup__pick-name">Сири</div>
                <div className="popup__pick-arrow">
                  <img src={arrowSvg} alt="" className="popup__arrow-svg" />
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default PizzaForm;
