// src/components/PopularGames.js
import React from 'react';

const PopularGames = () => {
  return (
    <section className="popular-games">
      <h2>Популярні ігри</h2>
      <div className="game-grid">
        <div className="game-card">
          <img src="deps/img/asset-1.jpg" alt="Гра 1" />
          <h3>Назва гри 1</h3>
          <p>₴1400</p>
          <a href="#" className="btn">Додати в кошик</a>
        </div>
        <div className="game-card">
          <img src="deps/img/asset-2.jpg" alt="Гра 2" />
          <h3>Назва гри 2</h3>
          <p>₴1500</p>
          <a href="#" className="btn">Додати в кошик</a>
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
