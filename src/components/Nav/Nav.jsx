import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { TfiMenuAlt } from 'react-icons/tfi';
import { FaPhoneAlt } from 'react-icons/fa';
import mainlogo from './../../assets/img/mainlogo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [scrollDir, setScrollDir] = useState('up'); // 'up' or 'down'
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setScrollDir('down');
      } else {
        // scrolling up
        setScrollDir('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      className={`header fixed top-0 left-0 w-full z-[999999] transition-all duration-500 ${
        scrollDir === 'up'
          ? 'show bg-white/10 backdrop-blur-md shadow-lg'
          : 'hide'
      }`}
    >
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={2} md={2}>
            <Box className="flex items-center justify-center text-2xl text-white transition-transform rounded-full cursor-pointer w-11 h-11 hover:scale-110 bg-primary">
             <Link   to="/"> <TfiMenuAlt /></Link> 
            </Box>
          </Grid>
          <Grid item xs={2} md={2}>
            <Box
              className="text-3xl font-extrabold tracking-widest text-center text-white"
              style={{
                color: 'red',
                WebkitTextStroke: '1px white',
                textShadow: '0px 5px Black',
              }}
            >
              <h2 className="font-serif text-3xl font-bold w-[200px] bg-white/20 rounded-md">
              <Link   to="/"><img src={mainlogo} alt="img" /></Link> 
              
              </h2>
            </Box>
          </Grid>
          <Grid item xs={2} md={2}>
            <Box className="justify-end hidden md:flex">
              <div className="relative group w-fit">
                <button className="relative z-10 px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-105 group-hover:shadow-2xl flex gap-2 items-center">
                  <FaPhoneAlt /> <span>Enquiry Now</span>
                </button>
                <span className="absolute inset-0 z-0 transition-all duration-500 scale-100 rounded-lg opacity-50 blur-md bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-110 group-hover:opacity-70"></span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Nav;
