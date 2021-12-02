import React from "react";
import Card from "../components/Card";
import CarouselItems from "../components/CarouselItems";
import tenantsJson from "../tenants.json";


const Main = () => {
  console.log("main");
  const cards = [[], [], [], []];
  [...tenantsJson].forEach((item) => cards[item.card].push(item));

  return (
    <div>
      <div>
        <div className="main-photo"></div>
        <div className="wrapper-info-for-tenants container">
          <h5 className="info-for-tenants">
            Сдаются в аренду помещения от 15 до 300 м.кв. По вопросам аренды
            обращайтесь по тел.{" "}
            <a className="phone-number" href="tel:+375297908981">
              8 (029) 7908981
            </a>
          </h5>
        </div>
      </div>
      <div className="categorys-tc">
        <div className="wrapper-tc container">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
      </div>
      <section className="shops-info">
        <div className="shops-img">
          <h2 className="title-category-text">Магазины</h2>
        </div>
        <CarouselItems />
      </section>
      <div id="tv-repair">TV</div>
    </div>
  );
};

export default Main;
