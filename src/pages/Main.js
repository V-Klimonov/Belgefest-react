import React from "react";
import Card from "../components/Card";
import CarouselItems from "../components/CarouselItems";
import data from "../data.json";
import Workshop from "../components/Workshop";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    document.title = 'Торговый центр "Белгефест" г.Пружаны, ул.Заводская, 17';
  }, []);
  const cards = [[], [], [], []];
  [...data].forEach((item) => cards[item.card].push(item));
  const shops = [...data].filter((item) => item.category === "shop");
  const beautyHeals = [...data].filter(
    (item) => item.category === "beauty-heals"
  );
  const workshopCards = [...data].filter((item) => item.category === "workshop");
  console.log(beautyHeals);
  return (
    <div>
      <div className="main-photo"></div>
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
        <CarouselItems id={"carouselShops"} items={shops} />
      </section>
      <section className="heals-and-beauty-info">
        <div className="heals-and-beauty-img">
          <h2 className="title-category-text">Красота и здоровье</h2>
        </div>
        <CarouselItems id={"carouselBeauty"} items={beautyHeals} />
      </section>
      <section id="repair-workshops" className="equipment-repair-workshops">
        <div className="repair-workshops-img">
          <h2 className="title-category-text">
            Сертифицированные мастерские по ремонту техники
          </h2>
        </div>
        {workshopCards.map((workshopCard, index) => {
          return <Workshop key={index} workshopCard={workshopCard} />;
        })}
      </section>
    </div>
  );
};

export default Main;
