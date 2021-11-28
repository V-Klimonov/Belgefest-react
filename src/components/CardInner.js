import React from 'react'

const CardInner = ({ card }) => {
    return card.map((shop, index) => {
    return (
      <div key={index} className="icon-and-title-category">
        <img
          src={process.env.PUBLIC_URL + "/" + shop.mainImg}
          className="small-icon"
          alt={shop.alt}
        />
        <a href="#" className="title-category">
          {shop.title}
        </a>
      </div>
    );
  });
};

export default CardInner
