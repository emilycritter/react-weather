import React from 'react';
import logo from '../images/logo.png';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <a href="/" aria-label="Homepage">
        <img
        src={logo} alt="Weather app logo."
        class="header__logo"
        width="192" height="192" />
      </a>
    </div>
  );
};

export default Header;
