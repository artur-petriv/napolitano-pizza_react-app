import React from "react";

// Styles
import "./Footer.sass";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__info">
          <h5 className="footer__title">Про нас</h5>
          <ul className="footer__list">
            <li className="footer__item">Про нашу піцерію</li>
            <li className="footer__item">Контакти</li>
          </ul>
        </div>

        <div className="footer__info">
          <h5 className="footer__title">Інформація</h5>
          <ul className="footer__list">
            <li className="footer__item">Довідка та FAQ</li>
            <li className="footer__item">Політика конфіденційності</li>
            <li className="footer__item">Угода користовача</li>
          </ul>
        </div>

        <div className="footer__info">
          <h5 className="footer__title">Покупцям</h5>
          <ul className="footer__list">
            <li className="footer__item">Про нашу піцерію</li>
            <li className="footer__item">контакти</li>
          </ul>
        </div>

        <div className="footer__info">
          <h5 className="footer__title">Розсилка</h5>
          <div className="footer-sub">
            <p className="footer-sub__text">
              Отримуйте інформацію про новинки і акції
            </p>
            <form className="footer-sub__form">
              <input
                type="email"
                placeholder="Введіть E-mail адрес"
                className="footer-sub__input"
              />
              <button className="footer-sub__button">Підписатися</button>
            </form>
          </div>
        </div>

        <div className="footer__info">
          <h5 className="footer__title">Ми в соціальних мережах</h5>
          <ul className="footer-socials">
            <li className="footer-socials__item"></li>
            <li className="footer-socials__item"></li>
            <li className="footer-socials__item"></li>
            <li className="footer-socials__item"></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
