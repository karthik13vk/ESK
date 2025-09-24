import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { LiaQuoteRightSolid } from "react-icons/lia";
import { Grid, Box, Container } from '@mui/material';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import videoimg from './../../assets/img/video.jpg';
import avatar1 from './../../assets/img/avatar1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reviews = [
    {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        name: "Karthik",
        role: "Customer",
        avatar: avatar1,
    },
    {
        rating: 5,
        text: "Another great review from a happy customer Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.!",
        name: "Raj",
        role: "Client",
        avatar: avatar1,
    },
    {
        rating: 5,
        text: "Amazing service and photography quality Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
        name: "Sneha",
        role: "Bride",
        avatar: avatar1,
    },
    {
        rating: 5,
        text: "Exceptional work. Highly recommended Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.!",
        name: "Karthik",
        role: "Customer",
        avatar: avatar1,
    },
    {
        rating: 5,
        text: "Professional and friendly team! Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        name: "Raj",
        role: "Client",
        avatar: avatar1,
    },
    {
        rating: 5,
        text: "Captured every moment beautifully Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
        name: "Sneha",
        role: "Bride",
        avatar: avatar1,
    },
];

const ReviewSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [is992Up, setIs992Up] = useState(false);
    const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);

    // useEffect(() => {
    //     AOS.init({  startEvent: 'DOMContentLoaded', duration: 1000 });
    // }, []);

    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            setIs992Up(width >= 992);

            if (width >= 1024) {
                setCurrentSlidesPerView(3);
            } else if (width >= 768) {
                setCurrentSlidesPerView(2);
            } else {
                setCurrentSlidesPerView(1);
            }
        };

        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div
            className="relative z-40 bg bg-center bg-no-repeat bg-cover py-15 after:content-[''] after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-black/20 -z-10"
            style={{ backgroundImage: `url(${videoimg})` }}
        >
            <Box className="sx={{ py: 10, width: '100%', zIndex: 999 }}">
                <Grid container spacing={4} columns={10} justifyContent={'center'}>
                    <Grid item xs={12} lg={8}>
                        <div
                            className="mb-6 heading-section"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "20px",
                                position: "relative",
                                zIndex: 9999999,
                            }}
                        >
                            <h6 className="inline-block relative px-2 text-sm font-normal text-white uppercase tracking-wide z-10 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-primary before:rounded-md">
                                Review
                            </h6>
                            <h1 className="mb-2 text-4xl text-white font-third">Testimonial</h1>
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ py: 0, width: '100%', zIndex: 999 }} className="relative flex items-center">
                <Container>
                    <Grid container spacing={4} alignItems="center" data-aos="fade-up" className="relative z-10">
                        <Grid item xs={12}>
                            <Swiper
                                onSwiper={setSwiperInstance}
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                modules={[Autoplay, Navigation]}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                className="mySwiper"
                            >
                                {reviews.map((review, idx) => {
                                    const centerOffset = Math.floor(currentSlidesPerView / 2);
                                    const centerIndex = (activeIndex + centerOffset) % reviews.length;
                                    const isCenter = idx === centerIndex;

                                    return (
                                        <SwiperSlide key={idx}>
                                            <Box
                                                className={`relative px-8 py-8 rounded-lg shadow-md transition-all duration-300 ${is992Up
                                                    ? isCenter
                                                        ? 'bg-primarytwo scale-105 -z-20'
                                                        : 'bg-primarytwo/20 text-white/10 backdrop-blur-md scale-95 z-0'
                                                    : 'bg-primarytwo scale-100 z-0'
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <ul className="flex items-center gap-1 text-yellow-400">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <li key={i}>
                                                                <FaStar />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="text-5xl text-amber-700">
                                                        <LiaQuoteRightSolid />
                                                    </div>
                                                </div>

                                                <p className="mb-6 leading-relaxed text-md">
                                                    "{review.text}"
                                                </p>

                                                <div
                                                    className={`flex items-center gap-4 pt-4 mt-4 border-t ${is992Up ?
                                                            isCenter ? 'border-primary' : 'border-gray-300' : 'text-primary'
                                                        }`}
                                                >
                                                    <div className="w-12 h-12 overflow-hidden border rounded-full border-primary">
                                                        <img
                                                            src={review.avatar}
                                                            alt={review.name}
                                                            className={`object-cover w-full h-full ${isCenter ? 'bg-primary' : 'bg-primary/10 backdrop-blur-md scale-95'
                                                                }`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className={`text-lg font-semibold ${is992Up ?
                                                            isCenter ? 'text-primary' : 'text-white/10'
                                                            : 'text-primary'}`}>
                                                            {review.name}
                                                        </h4>
                                                        <h6 className={`text-sm ${isCenter ? 'text-black' : 'text-gray/20'}`}>
                                                            {review.role}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Box>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                            <Box className="flex justify-center gap-4 mt-6">
                                <button
                                    ref={prevRef}
                                    className="p-3 text-white transition rounded-full cursor-pointer bg-primary hover:bg-opacity-80"
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    ref={nextRef}
                                    className="p-3 text-white transition rounded-full cursor-pointer bg-primary hover:bg-opacity-80"
                                >
                                    <FaArrowRight />
                                </button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ReviewSlider;
