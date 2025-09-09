import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import videoimg from './../../assets/img/video.jpg';
import avatar1 from './../../assets/img/avatar1.png';
import { LiaQuoteRightSolid } from "react-icons/lia";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Review = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='bg'>

                <Box
                    sx={{ py: 0, width: "100%", zIndex: 999 }}
                    style={{ backgroundImage: `url(${videoimg})` }}
                    className="bg-no-repeat bg-center bg-cover h-[400px] flex items-center relative"
                >
                    <Container>
                        <Grid container spacing={4} columns={12} className="" alignItems="center" data-aos="fade-up">
                            <Grid item size={{ xs: 12, lg: 7, md: 6 }} alignItems="center">

                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: false,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay, Pagination, Navigation,]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Box className="relative px-8 py-8 rounded-lg shadow-md bg-primarytwo">
                                            {/* Top Section: Stars and Quote Icon */}
                                            <div className="flex items-center justify-between mb-4">
                                                <ul className="flex items-center gap-1 text-yellow-500">
                                                    {[...Array(5)].map((_, idx) => (
                                                        <li key={idx}>
                                                            <FaStar />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="text-6xl text-amber-700">
                                                    <LiaQuoteRightSolid />
                                                </div>
                                            </div>

                                            {/* Middle Section: Review Text */}
                                            <div className="mb-6 leading-relaxed text-black text-md">
                                                <p>
                                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                    suscipit magnam labore autem laudantium dolorum libero est, tenetur
                                                    natus odit, eos dolores ipsa obcaecati fugiat molestiae non. Iusto,
                                                    voluptates magnam."
                                                </p>
                                            </div>

                                            {/* Bottom Section: User Info */}
                                            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-gray-300">
                                                <div className="w-12 h-12 overflow-hidden border rounded-full border-primary">
                                                    <img src={avatar1} alt="avatar" className="object-cover w-full h-full" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-semibold text-gray-900">Karthik</h4>
                                                    <h6 className="text-sm text-gray-600">Customer</h6>
                                                </div>
                                            </div>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box className="relative px-8 py-8 rounded-lg shadow-md bg-primarytwo">
                                            {/* Top Section: Stars and Quote Icon */}
                                            <div className="flex items-center justify-between mb-4">
                                                <ul className="flex items-center gap-1 text-yellow-500">
                                                    {[...Array(5)].map((_, idx) => (
                                                        <li key={idx}>
                                                            <FaStar />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="text-6xl text-amber-700">
                                                    <LiaQuoteRightSolid />
                                                </div>
                                            </div>

                                            {/* Middle Section: Review Text */}
                                            <div className="mb-6 leading-relaxed text-black text-md">
                                                <p>
                                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                    suscipit magnam labore autem laudantium dolorum libero est, tenetur
                                                    natus odit, eos dolores ipsa obcaecati fugiat molestiae non. Iusto,
                                                    voluptates magnam."
                                                </p>
                                            </div>

                                            {/* Bottom Section: User Info */}
                                            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-primary">
                                                <div className="w-12 h-12 overflow-hidden border border-black rounded-full">
                                                    <img src={avatar1} alt="avatar" className="object-cover w-full h-full" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-semibold text-gray-900">Karthik</h4>
                                                    <h6 className="text-sm text-gray-600">Customer</h6>
                                                </div>
                                            </div>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Box className="relative px-8 py-8 rounded-lg shadow-md bg-primarytwo">
                                            {/* Top Section: Stars and Quote Icon */}
                                            <div className="flex items-center justify-between mb-4">
                                                <ul className="flex items-center gap-1 text-yellow-500">
                                                    {[...Array(5)].map((_, idx) => (
                                                        <li key={idx}>
                                                            <FaStar />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="text-6xl text-amber-700">
                                                    <LiaQuoteRightSolid />
                                                </div>
                                            </div>

                                            {/* Middle Section: Review Text */}
                                            <div className="mb-6 leading-relaxed text-black text-md">
                                                <p>
                                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                    suscipit magnam labore autem laudantium dolorum libero est, tenetur
                                                    natus odit, eos dolores ipsa obcaecati fugiat molestiae non. Iusto,
                                                    voluptates magnam."
                                                </p>
                                            </div>

                                            {/* Bottom Section: User Info */}
                                            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-gray-300">
                                                <div className="w-12 h-12 overflow-hidden border rounded-full border-primary">
                                                    <img src={avatar1} alt="avatar" className="object-cover w-full h-full" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-semibold text-gray-900">Karthik</h4>
                                                    <h6 className="text-sm text-gray-600">Customer</h6>
                                                </div>
                                            </div>
                                        </Box>
                                    </SwiperSlide>
                                </Swiper>
                            </Grid>
                            <Grid item size={{ xs: 12, lg: 6, md: 6 }} alignItems="center">

                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>

        </>
    )
}

export default Review