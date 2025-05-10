import React from "react";
import "./Gooey.css";

const GooeyDropdown: React.FC = () => {
  return (
    <div className="gooey-wrapper">
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />
        <label className="dropdown__face" htmlFor="dropdown">
          <div className="dropdown__text">Dropdown</div>
          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          <li>🙂</li>
          <li>😺</li>
          <li>😽</li>
          <li>😎</li>
          <li>🤗</li>
        </ul>
      </div>

      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </div>
  );
};

export default GooeyDropdown;
