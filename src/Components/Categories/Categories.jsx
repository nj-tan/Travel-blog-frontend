import React from 'react';
import './Categories.css';

import satellite from '../../Assets/satellite.png';
import airplane from '../../Assets/airplane.png';
import microphone from '../../Assets/microphone.png';
import settings from '../../Assets/settings.png';
import rec from '../../Assets/rec.png'

const Categories = () => {
  return (
  <div className="Categories container section">
    <div className="secHeader">
      <span>
        Category
      </span>
      <h2>
        We offer the best services
      </h2>
    </div>
  <div className="secContainer grid">
    <div className="singleCard grid">
      <div className="imgDiv">
        <img src={satellite} alt="" className="mainImage"/>
        <img src={rec} alt="" className="design"/>
      </div>
      <span>
      Calculated Weather
    </span>
    <p>
      Built Wicket longer admire do barton vanity itself do in it.
    </p>
    </div>

    <div className="singleCard grid">
      <div className="imgDiv">
        <img src={airplane} alt="" className="mainImage"/>
        <img src={rec} alt="" className="design"/>
      </div>
      <span>
      Best Flights
    </span>
    <p>
      Engrossed listening. Park gate sell they went hard for the great evening.
    </p>
    </div>

    <div className="singleCard grid">
      <div className="imgDiv">
        <img src={microphone} alt="" className="mainImage"/>
        <img src={rec} alt="" className="design"/>
      </div>
      <span>
      Calculated Weather
    </span>
    <p>
      Built Wicket longer admire do barton vanity itself do in it.
    </p>
    </div>

    <div className="singleCard grid">
      <div className="imgDiv">
        <img src={settings} alt="" className="mainImage"/>
        <img src={rec} alt="" className="design"/>
      </div>
      <span>
      Calculated Weather
    </span>
    <p>
      Built Wicket longer admire do barton vanity itself do in it.
    </p>
    </div>

  </div>
  </div>
  );
};

export default Categories;
