import React from "react";
import logoSvg from "./logo.svg";

// Styles
import "../main.sass";
import "./Header.sass";

function Header() {
  return (
    <div className="header">
      <div className="container">
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
        </div>
      </div>
    </div>
  );
}

export default Header;
