import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';


const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="deps/img/logo.png" alt="Nintendo Switch" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to = '/catalog'>Каталог</Link>
          </li>
          <li><a href="#">Акції</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <li>
            <Link to = '/signup'>Увійти</Link>
        </li>
        <li>
            <Link to = '/cart'>Корзина</Link>
        </li>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
