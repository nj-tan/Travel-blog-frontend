import React from 'react';
import './Home.css';

import mainImage from '../../Assets/mainImage.png'
import airplane from '../../Assets/airplane.png'
import { FaPlay } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="Home container section">
      <div className="textDiv grid">
        <span className="redText">Best Destinations around the world</span>
        <h2>Travel, enjoy and live a new and full life</h2>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they went hard for the season.
        </p>
        <div className="buttons flex">
          <button className="btn">Find More</button>
          <div className="playBtn flex">
            <FaPlay className="icon"/>
            <span>Play Demo</span>
          </div>
        </div>
      </div>

        <div className="imgDiv flex">
          <img src={mainImage} alt="MainImage" />
        </div>
        <img src={airplane} alt="Airplane Image" className="airplane" />
    </div>
  );
};

export default Home;
