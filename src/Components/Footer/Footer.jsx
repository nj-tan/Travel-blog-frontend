import React from 'react';
import './Footer.css';

import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return <div className="Footer container">
    <div className="secContainer grid">
      <div className="singleSection">
        <h2>Leggo</h2>
        <p>Book your trip in a minute, get full control!</p>
      </div>

      <div className="singleSection">
        <h3>Company</h3>
        <li>About</li>
        <li>Career</li>
        <li>Support</li>
      </div>

      <div className="singleSection">
        <h3>Contact</h3>
        <li>Help/FAQ</li>
        <li>Press</li>
        <li>Affiliates</li>
      </div>

      <div className="singleSection">
        <h3>More</h3>
        <li>Guidelines</li>
        <li>Insurance</li>
        <li>Hotels</li>
      </div>

      <div className="singleSection">
        <div className="socials flex">
          < AiFillInstagram className="icon"/>
          < BiLogoFacebookCircle className="icon"/>
          < AiFillTwitterCircle className="icon"/>
          < BsYoutube className="icon"/>
        </div>
      {/* <span className="text">Discover our app</span>
      <span className="flex">
        <img src="" alt="" />
      </span> */}
      </div>
    </div>
  </div>;
};

export default Footer;
