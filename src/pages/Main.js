import React from 'react';
import Card from '../components/Card';
import tenantsJson from '../tenants.json';


const Main = () => {
    console.log('main')
    const cards = [[], [], [], []];
    [...tenantsJson].forEach((item) => cards[item.card].push(item));

    return (
        <div className="categorys-tc">
            <div className="wrapper-tc container">
            {cards.map((card, index) => {
                return <Card key={index} card={card} />;
            })}
            </div>
        </div>
      
    );
}

export default Main
