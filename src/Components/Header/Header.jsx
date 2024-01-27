import React from 'react';
import { useState } from 'react';
import './Header.css';

import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from "react-icons/tb";

const Header = () => {

  const [active, setActive] = useState('menu');

  const showNavBar = () => {
    setActive('menu showMenu');
  };

  const RemoveShowNavBar = () => {
    setActive('menu');
  };

  const [transparent, setTransparent] = useState('Navbar');

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("Navbar activeHeader");
    } else {
      setTransparent("Navbar");
    }
  };

  window.addEventListener('scroll', addBg);

  return (

  <div className={transparent}>
    <div className="logoDiv">
      <h2 className="logo">Leggo</h2>
    </div>
    <div className={active}>
      <div className="lists flex">
        <li>
          <a href="">Destination</a>
        </li>
        <li>
          <a href="">Hotels</a>
        </li>
        <li>
          <a href="">Flights</a>
        </li>
        <li>
          <a href="">Bookings</a>
        </li>
      </div>
      <div className="btns flex">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
        <select className="lang">
          <option value="">EN</option>
          <option value="">GM</option>
          <option value="">FR</option>
        </select>
        </div>

        <div className="closeIcon" onClick={RemoveShowNavBar}>
          <AiFillCloseCircle className="icon"/>
        </div>
      </div>
      <div className="toggleIcon" onClick={showNavBar}>
        <TbGridDots className="icon"/>
      </div>
    </div>

  )
};

export default Header;
