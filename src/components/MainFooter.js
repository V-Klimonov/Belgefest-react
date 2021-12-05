import React from 'react'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const MainFooter = () => {
    return (
      <footer>
        <div id="contacts" className="contacts-map container">
          <div className="contacts-map-wrapper">
            <div className="contacts-footer">
              <h2 className="box-title-text footer-contacts-title">Контакты</h2>
              <p>Приглашаем в ТЦ "Белгефест"</p>
              <h4>Адрес</h4>
              <p>ул.Заводская, 17, г.Пружаны, Брестская обл.</p>
              <h4>Телефоны</h4>
              <p>Администрация:</p>
              <span className="phone-number-box">
                <a className="phone-number" href="tel:+375163293271">
                  Гор. 8 (01632) 93271
                </a>
                <a className="phone-number" href="tel:+375297908981">
                  МТС 8 (029) 7908981
                </a>
              </span>
              <a href="https://www.instagram.com/_belgefest_/">
                <img
                  className="inst-icon"
                  src={process.env.PUBLIC_URL + "/img/instagram-icon.svg"}
                  alt="clock"
                />
              </a>
            </div>
            <iframe
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3429.6506313744503!2d24.471688129301256!3d52.56727440637535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720eb4b1da36203%3A0xfa6c29bff78718bb!2z0KLQpiDQkdC10LvQs9C10YTQtdGB0YI!5e0!3m2!1sru!2sua!4v1631907974210!5m2!1sru!2sua"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="footer-nav-menu">
          <div className="footer-nav container">
            <Link className="footer-brand-logo" to="/">
              <div className="logo-img-text">ТОРГОВЫЙ ЦЕНТР</div>
              <div className="logo-img-text-title">БЕЛГЕФЕСТ</div>
            </Link>
            <div className="decor-line"></div>
            <div className="footer-nav-links">
              <Link className="footer-color-link" to="about">
                О нас
              </Link>
              <Link className="footer-color-link" to="/#carouselShops">
                Магазины
              </Link>
              <Link className="footer-color-link" to="/#carouselBeauty">
                Красота и здоровье
              </Link>
              <Link className="footer-color-link" to="/#repair-workshops">
                Мастерские по ремонту
              </Link>
              <Link className="footer-color-link" to="about/#vacancy">
                Вакансии
              </Link>
              <Link className="footer-color-link" to="tenants">
                Арендаторам
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default MainFooter
