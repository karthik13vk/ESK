import React from 'react';
import './Preloader.css';
import preloaderImg from './../../assets/img/preloader.PNG';

const Preloader = () => {
  return (
    // <div className="modern-preloader">
    //   <div className="loader-content">
    //     <h1 className="w-50 loader-title">
    //       <img src={preloaderImg} alt="img" />
    //     </h1>
    //     <div className="loader-bar">
    //       <div className="bar-fill"></div>
    //     </div>
    //   </div>
    // </div>
     <div className="heartbeat-preloader">
      <div className="heartbeat-wrapper">
        <img src={preloaderImg} alt="Loading" className="heartbeat-logo" />
        {/* <p className="heartbeat-text">Loading...</p> */}
      </div>
    </div>
  );
};

export default Preloader;
