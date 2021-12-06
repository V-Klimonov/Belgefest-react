import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const CarouselItems = ({ items, id }) => {
  return (
    <div className="container">
      <Carousel id={id} variant="dark">
        {items.map((el, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="slide-box">
                <img
                  className="carousel-img-w"
                  src={process.env.PUBLIC_URL + el.mainImg}
                  alt={el.alt}
                />
                <div className="slide-text-box">
                  <h2 className="slide-title-text">{el.shortTitle}</h2>
                  <p>{el.shortDescription}</p>
                  <div className="working-hours">
                    <img
                      className="clock-img"
                      src={process.env.PUBLIC_URL + "/img/clock.svg"}
                      alt="clock"
                    />
                    <span>{el.workingHours}</span>
                  </div>
                  <Link className="button-info" to={el.link}>
                    Подробнее
                  </Link>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselItems;
