import React from 'react'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

const CardInner = ({ card }) => {
    return card.map((el, index) => {
    return (
      <div key={index} className="icon-and-title-category">
        <img
          src={process.env.PUBLIC_URL + el.mainImg}
          className="small-icon"
          alt={el.alt}
        />
        <Link  className="title-category" to={el.link}>
          {el.title}
        </Link>
      </div>
    );
  });
};

export default CardInner
