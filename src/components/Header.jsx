import React from "react";

import logo from "../img/logo.png";
import sprite from "../img/symbol-defs.svg";
import userPhoto from "../img/user.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use href={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use href={`${sprite}#icon-bookmark`}></use>
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use href={`${sprite}#icon-chat`}></use>
          </svg>
          <span className="user-nav__notification">10</span>
        </div>
        <div className="user-nav__user">
          <img src={userPhoto} alt="" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
