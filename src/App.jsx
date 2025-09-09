import { useEffect, useState } from 'react';

import './App.css';

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
import Preloader from './components/Preloader/Preloader';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import MouseParallax from './components/Parallax/MouseParallax';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // matches bar animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
    }
  }, [loading]);

  if (loading) return <Preloader />;

  return (
    <>
     <MouseParallax />
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
  );
}

export default App;
