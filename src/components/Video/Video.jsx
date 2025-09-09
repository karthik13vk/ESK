import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import videoimg from './../../assets/img/video.jpg';
import { FaPlay } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Video = () => {

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Carousel: {
        infinite: false,
      },
      Video: {
        autoplay: false,
      },
    });

    // Optional cleanup on unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <Box sx={{ py: 10, width: '100%', zIndex: 999 }}  data-aos="fade-up">
                <Container >
                    <Grid container spacing={4} columns={12} className="" alignItems="center">
                        <Grid item size={{ xs: 12, lg: 12 }} alignItems="center" 
                            style={{ backgroundImage: `url(${videoimg})` }}
                            className="bg-no-repeat bg-center bg-cover h-[400px] flex items-center justify-center relative">
                            <div className="absolute z-[1] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-nowrap items-center">
                                <Button className='p-5 text-white bg-primary rounded-full shadow-lg hover:bg-primarytwo w-[70px] 
                                h-[70px]' data-fancybox="video-gallery"  href="https://www.youtube.com/watch?v=4FUnXaq_VWk">
                                    <FaPlay className='text-lg' />
                                    <span className="line-video-animation line-video-1"></span>
                                    <span className="line-video-animation line-video-2"></span>
                                    <span className="line-video-animation line-video-3"></span>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Video