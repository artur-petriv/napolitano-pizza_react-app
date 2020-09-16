import React from "react";
import logoSvg from "./logo.svg";
import deliverySvg from "./delivery.svg";
import clockSvg from "./clock.svg";
import callSvg from "./call.svg";

// Styles
import "../Main.sass";
import "./Header.sass";

function Header() {
  return (
    <div className="header">
      <div className="header-tip">
        <div className="header-tip__title">Час доставки</div>
        <div className="header-tip__text">~40 хвилин</div>
      </div>
      <div className="container header__container">
        <div className="header__left">
          <div className="logo-wrap">
            <div className="logo-wrap__image">
              <img className="logo-wrap__svg" src={logoSvg} alt="Logo" />
            </div>
            <div className="logo-wrap__content">
              <h1 className="logo-wrap__title">Napolitano</h1>
              <div className="logo-wrap__subtitle">
                <span className="logo-wrap__text">Доставка піци: </span>
                <span className="logo-wrap__city">
                  {/* //TODO: Change "a" to <Link> react-router componnent */}
                  <a className="logo-wrap__city-link">м. Львів</a>
                </span>
              </div>
            </div>
          </div>

          <div className="header-info">
            <div className="header-info__image">
              <img src={deliverySvg} alt="" className="header-info__svg" />
            </div>
            <div className="header-info__content">
              <div className="header-info__line">
                Доставка по місту —{" "}
                <span className="header-info__line_bolder">50 ₴</span>
              </div>
              <div className="header-info__line">
                За межі міста —{" "}
                <span className="header-info__line_bolder">+14 ₴/км</span>
              </div>
            </div>
          </div>
        </div>

        <div className="header__right">
          <div className="header-info">
            <div className="header-info__image">
              <img src={clockSvg} alt="" className="header-info__svg" />
            </div>
            <div className="header-info__content">
              <div className="header-info__line">
                <span className="header-info__line_bolder">Пн-Пт:</span> 09:00 —
                22:00
              </div>
              <div className="header-info__line">
                <span className="header-info__line_bolder">Сб-Нд:</span> 10:00 —
                23:00
              </div>
            </div>
          </div>

          <div className="header-info">
            <div className="header-info__image">
              <img src={callSvg} alt="" className="header-info__svg" />
            </div>
            <div className="header-info__content">
              <div className="header-info__line">
                {/* //TODO: Change "a" to <Link> react-router componnent */}
                <a className="header-info__link">(032) 662 58 47</a>
              </div>
              <div className="header-info__line">
                {/* //TODO: Change "a" to <Link> react-router componnent */}
                <a className="header-info__link">(050) 420 52 10</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
