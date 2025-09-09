import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="modern-preloader">
      <div className="loader-content">
        <h1 className="loader-title">ESK</h1>
        <div className="loader-bar">
          <div className="bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
