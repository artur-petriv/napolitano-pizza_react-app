import React from "react";
import pizzaImg from "./pizza.jpg";
import settingsImg from "./settings.svg";

// Styles
import "./Card.sass";

function Card() {
  return (
    <div className="card">
      <div className="card__image">
        <img src={pizzaImg} alt="" className="card__img" />
      </div>
      <h3 className="card__title">Карбонара</h3>
      <p className="card__description">
        Томатна основа, моцарела, італійське м'ясо Di Parma, соус Песто, рукола
      </p>
      <div className="card__options">
        <div className="card__option active">20 см</div>
        <div className="card__option">30 см</div>
        <div className="card__option">40 см</div>
      </div>
      <div className="card__footer">
        <div className="card__price">95 ₴</div>
        <div className="card__buttons">
          <button className="card__choice">
            <img src={settingsImg} alt="" className="card__choice-img" />
          </button>
          <button className="card__buy">В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
