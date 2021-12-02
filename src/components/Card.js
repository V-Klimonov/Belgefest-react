import React from 'react'
import CardInner from './CardInner';

const Card = ({ card }) => {
  console.log('card')
  return (
    <div className="inner-tc">
      <CardInner card={card} />
    </div>
  );
};

export default Card
