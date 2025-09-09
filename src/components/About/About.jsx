import React, { useEffect } from 'react'
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import aboutimg from './../../assets/img/about-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
    return (
        <div>
            <Box sx={{ py: 10, width: '100%', zIndex: 999 }}>
                <Container>
                    <Grid container spacing={4} columns={12} className="" alignItems="center">
                        <Grid item size={{ xs: 12, lg: 6 ,md : 6  }} alignItems="center" data-aos="fade-right">
                            <img src={aboutimg} alt="img" />

                        </Grid>
                        <Grid item size={{ xs: 12, lg: 6 ,md : 6 }} alignItems="center" data-aos="fade-left">
                            <div className='flex flex-col items-start gap-5 heading-section lg:flex-col'>
                                <h6 className="relative text-white px-0.5 inline-block before:content-[''] before:absolute before:left-0 before:top-0 before:h-[20px] before:w-full before:bg-primary before:-z-10" >
                                    About Us
                                </h6>
                                <h1 className='mb-2 text-4xl text-normal font-third'>About Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint earum aliquam nihil cumque, omnis tempora pariatur quos! Magni porro consequatur voluptatem optio esse assumenda iste labore a, delectus dignissimos!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint earum aliquam nihil cumque, omnis tempora pariatur quos! Magni porro consequatur voluptatem optio esse assumenda iste labore a, delectus dignissimos!</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default About