import React from 'react'
import { Link } from 'react-router-dom';

const CardInner = ({ card }) => {
    return card.map((shop, index) => {
    return (
      <div key={index} className="icon-and-title-category">
        <img
          src={process.env.PUBLIC_URL + "/" + shop.mainImg}
          className="small-icon"
          alt={shop.alt}
        />
        <Link  className="title-category" to={shop.link}>
          {shop.title}
        </Link>
      </div>
    );
  });
};

export default CardInner
