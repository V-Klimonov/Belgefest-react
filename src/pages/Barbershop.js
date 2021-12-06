import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CarouselImg from "../components/CarouselImg";

const Barbershop = ({data}) => {
  const pageData = [...data].find(el => el.page === "Barbershop") 
  
  useEffect(() => {document.title = pageData.title;
  }, []);
  return (
    <div className="info-box-wrapper">
      <div className="container">
        <Link className="color-link" to="/">
          На главную
        </Link>
        <div className="info-box-inner">
          <CarouselImg />
          <div class="info-box-text">
            <h2 class="box-title-text">{pageData.fullTextTitle}</h2>
            <p>
              Меня зовут Валентина! С удовольствием рада представить к вашим
              услугам, парикмахерскую студию "Валенсия" ТЦ. Гефест, 2 этаж. -
              Немного о себе, работаю в индустрии красоты 13 лет, постоянно
              совершенствуя навыки и повышая мастерство, работая в салонах
              премиум класса и в Минске и в Москве. Выполняю мужские стрижки
              любой сложности, стрижка бороды, камуфляж седины, детские стрижки
              и даже детки от года, а также женские стрижки, все виды
              окрашивания, все виды сложных окрашиваний. Индивидуальный подход к
              каждому посетителю. Буду очень рада видеть вас у себя в гостях в
              прекрасной для вас атмосфере. По всем вопросам обращайтесь по
              телефону:
            </p>
            <a class="phone-number" href="tel:+375295806238">
              8 (029) 5806238
            </a>
            <p> Мои работы:</p>
            <p>Режим рабрты:</p>
            <div class="working-hours">
              <img
                class="clock-img"
                src={process.env.PUBLIC_URL + "/img/clock.svg"}
                alt="clock"
              />
              <span> вт-пт 09:00 - 18:00 сб,вс 10:00 - 16:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barbershop;
