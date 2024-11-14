import React from 'react';
import Hero from './Hero';
import SpecialOffers from './SpecialOffers';
import { useState } from 'react';
import products from './products';

const PopularGames = () => {
  const games = [
    { id: 1, imgSrc: "deps/img/asset-1.jpg", title: "Назва гри 1", price: "₴1400" },
    { id: 2, imgSrc: "deps/img/asset-2.jpg", title: "Назва гри 2", price: "₴1500" },
    { id: 3, imgSrc: "deps/img/asset-3.jpg", title: "Назва гри 3", price: "₴1300" },
    { id: 4, imgSrc: "deps/img/asset-4.jpg", title: "Назва гри 4", price: "₴1200" },
    { id: 5, imgSrc: "deps/img/asset-5.jpg", title: "Назва гри 5", price: "₴1600" },
    { id: 6, imgSrc: "deps/img/asset-6.jpg", title: "Назва гри 6", price: "₴1100" },
  ];

  const [visibleGames, setVisibleGames] = useState(2);

  const showMoreGames = () => {
    setVisibleGames(prevVisibleGames => prevVisibleGames + 2);
  };

  return (
    <section className="popular-games">
      <Hero/>
      <h2>Популярні ігри</h2>
      <div className="game-grid">
        {games.slice(0, visibleGames).map(game => (
          <div key={game.id} className="game-card">
            <img src={game.imgSrc} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.price}</p>
            <a href="#" className="btn">Додати в кошик</a>
          </div>
        ))}
      </div>
      {visibleGames < games.length && (
        <button onClick={showMoreGames} className="btn-more">Більше</button>
      )}
      <SpecialOffers/>
    </section>
  );
};

export default PopularGames;
