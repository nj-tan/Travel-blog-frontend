import React from 'react';
import './Destinations.css';

import { FaLocationArrow } from "react-icons/fa";

import Rome from '../../Assets/Rome.png';
const Destinations = () => {
  return (

  <div className="Destinations container section">
    <div className="secHeader">
      <span>Top Selling</span>
      <h2>Top Destinations</h2>
    </div>

    <div className="secContainer grid">

      <div className="singleCard grid">
        <div className="imgDiv">
          <img src={Rome} alt="destination" />
        </div>
        <div className="infoDiv">
          <div className="upperSpan flex">
            <span className="location">Rome, Italy</span>
            <span className="amount">PHP 50k</span>
          </div>
          <div className="lowerSpawn flex">
            <FaLocationArrow className="icon"/>
            <span className="distance">10 Day Trip</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  );
};

export default Destinations;
