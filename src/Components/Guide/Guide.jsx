import React from 'react';
import './Guide.css';

import icon1 from '../../Assets/icon1.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';


const Guide = () => {
  return <div className="Guide container section">
  <div className="secContainer flex">
    <div className="textDiv grid">

      <div className="secHeader">
        <span>Easy and Fast</span>
        <h2>Book your Next Trip</h2>
      </div>

      <div className="secContent grid">
      <div className="singleSection flex">
          <img src={icon1} alt="" />
          <div className="text">
            <span>Make a choice</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="singleSection flex">
          <img src={icon2} alt="" />
          <div className="text">
            <span>Make Payments</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="singleSection flex">
          <img src={icon3} alt="" />
          <div className="text">
            <span>Reach Airport on Date</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>;
};

export default Guide;
