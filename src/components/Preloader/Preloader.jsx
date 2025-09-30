import React from 'react';
import './Preloader.css';
import preloaderimg from './../../assets/img/FooterLogo.png';

const Preloader = () => {
  return (
    // <div className="modern-preloader">
    //   <div className="loader-content">
    //     <h1 className="w-50 loader-title">
    //       <img src={preloaderimg} alt="img" />
    //     </h1>
    //     <div className="loader-bar">
    //       <div className="bar-fill"></div>
    //     </div>
    //   </div>
    // </div>
     <div className="heartbeat-preloader">
      <div className="heartbeat-wrapper">
        <img src={preloaderimg} alt="Loading" className="heartbeat-logo" />
        {/* <p className="heartbeat-text">Loading...</p> */}
      </div>
    </div>
  );
};

export default Preloader;
