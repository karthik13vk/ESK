import { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import MouseParallax from './components/Parallax/MouseParallax';
// import Contact from './components/Contact/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

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
      <BrowserRouter>
        <MouseParallax />
        <Nav />
        <div id="smooth-wrapper">
          <div id="smooth-content">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>




            <Footer />
          </div>
        </div>

            <WhatsAppFloat />
          <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
