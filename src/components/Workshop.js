import React from "react";
import { Link } from "react-router-dom";

const Workshop = ({ workshopCard }) => {
  return (
    <div className="repair-workshops-wrapper container">
      <div id={workshopCard.id} className={workshopCard.innerDirection}>
        <img
          className="repair-workshops-photo"
          src={process.env.PUBLIC_URL + workshopCard.mainImg}
          alt={workshopCard.alt}
        />
        <div className="workshop-text-box">
          <div className="workshop-text-box-wrapper">
            <h2 className="box-title-text">{workshopCard.fullTextTitle}</h2>
            <p>{workshopCard.shortDescription}</p>
            <a className="phone-number" href={workshopCard.hrefPhoneNumMob}>
              {workshopCard.phoneNumMob}
            </a>
            <a className="phone-number" href={workshopCard.hrefPhoneNumCity}>
              {workshopCard.phoneNumCity}
            </a>
            <div className="working-hours">
              <img
                className="clock-img"
                src={process.env.PUBLIC_URL + "/img/clock.svg"}
                alt="clock"
              />
              <span>{workshopCard.workingHours}</span>
            </div>
            {workshopCard.href || (
              <Link
                className="button-info workshop-button"
                to={workshopCard.link}
              >
                Подробнее
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
