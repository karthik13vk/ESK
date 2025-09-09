import { useEffect, useState } from 'react'

import './App.css'

import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Services from './components/Services/Services';
import Video from './components/Video/Video';
import Socialmedia from './components/socialmedia/Socialmedia';
import Portfolio from './components/Portfolio/Portfolio';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import Sitemarquee from './components/Sitemarquee/Sitemarquee';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5, // smoothness factor (higher is slower)
      effects: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner />
          <Sitemarquee />
          <About />
          <Services />
          <Video />
          <Socialmedia />
          <Portfolio />
          <Review />
          <Features />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
