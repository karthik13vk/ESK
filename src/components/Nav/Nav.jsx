import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { TfiMenuAlt } from 'react-icons/tfi';
import { color } from 'framer-motion';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            className={`fixed top-0 left-0 w-full z-[9999999] transition-all duration-500  ${isScrolled
                ? 'bg-white/10  backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <Container maxWidth="xl" sx={{ py: 2 }}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={2} md={2}>
                        <Box className="flex items-center justify-center text-2xl text-white transition-transform rounded-full cursor-pointer w-11 h-11 hover:scale-110 bg-primary">
                            <TfiMenuAlt />
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Box className="text-3xl font-extrabold tracking-widest text-center text-white" style={{
                            color: 'red',
                            WebkitTextStroke: '1px white',
                            textShadow: '0px 5px Black'
                        }}>
                            <h2 className="mb-4 font-serif text-3xl font-bold">📸 ESK Studio</h2>
                        </Box>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Box className="justify-end hidden md:flex">
                            <div className="relative group w-fit">
                                <button className="relative z-10 px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-105 group-hover:shadow-2xl flex gap-2 items-center">
                                    <FaPhoneAlt /> <span className=''>Enquiry Now</span>

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
