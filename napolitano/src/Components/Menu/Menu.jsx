import React from "react";
import "./Menu.sass";
import "../Main.sass";

export default function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <ul className="menu__list">
          <li className="menu__item">Піца</li>
          <li className="menu__item">Бургери</li>
          <li className="menu__item">Напої</li>
          <li className="menu__item">Суші</li>
          <li className="menu__item">Салати</li>
          <li className="menu__item">Десерти</li>
          <li className="menu__item">Закуски</li>
          <li className="menu__item">Акції</li>
          <li className="menu__item">Доставка</li>
          <li className="menu__item">Контакти</li>
        </ul>
      </div>
    </div>
  );
}
