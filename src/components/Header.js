// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="deps/img/logo.png" alt="Nintendo Switch" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Акції</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <a href="#">Увійти</a>
        <a href="#" className="cart-icon">Кошик</a>
      </div>
    </header>
  );
};

export default Header;
