import React, { useEffect, useState } from 'react'
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';
import banner4 from '../../assets/img/banner1.jpg';
import aboutimg from './../../assets/img/about-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const features = [
    { title: "Professional & Experienced", banner: banner3, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati eaque distinctio ab laboriosam, tempora modi dolor id." },
    { title: "Creative Shoot Ideas", banner: banner2, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati eaque distinctio ab laboriosam, tempora modi dolor id." },
    { title: "Globally Awarded", banner: banner3, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati eaque distinctio ab laboriosam, tempora modi dolor id." },
    { title: "Best Quality Photos", banner: banner4, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati eaque distinctio ab laboriosam, tempora modi dolor id." },
];
const Features = () => {
    //   useEffect(() => {
    //     AOS.init({  startEvent: 'DOMContentLoaded', duration: 1000 });
    //   }, []);
    const [activeIndex, setActiveIndex] = useState(0); // Default active item

    const handleHover = (index) => {
        setActiveIndex(index);
    };

 
    return (
        <div>
            <Box sx={{ py: 10, width: '100%', zIndex: 999, position: 'relative', overflow: 'hidden' }}>
                <Container>
                    <Grid container spacing={4} columns={12} className="" alignItems="center">
                        <Grid item size={{ xs: 12, lg: 12, md: 12 }} alignItems="center">
                            <div className='flex flex-col items-start gap-5 heading-section lg:flex-col' >
                                <h6 className="relative text-white px-0.5 inline-block z-[9999] before:content-[''] before:absolute before:left-0 before:top-0 before:h-[20px] before:w-full before:bg-primary before:-z-10" >
                                    Our Features
                                </h6>
                                <h1 className='mb-2 text-4xl text-normal font-third'>Why choose Us</h1>
                            </div>
                            <ol className="relative w-full pl-0 mb-5 ml-0">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className={`block transition-all duration-500 ease-in-out cursor-pointer ${index === activeIndex ? 'highlight active' : ''
                                            }`}
                                        onMouseEnter={() => handleHover(index)} // for hover
                                    // onClick={() => setActiveIndex(index)} // uncomment for click
                                    >
                                        <div className="flex flex-col items-center justify-between lg:flex-row">
                                            <div className={`feature-box lg:w-[40%] w-full flex items-center gap-10 text-[24px] pl-1.5
                                             font-medium leading-[36px] py-6 transition-all duration-300 ${index === activeIndex ? 'bg-red-50 border-l-4 border-primary' : ''}`}>
                                                <h3
                                                    className={`mb-2 text-2xl font-semibold transition-all ${index === activeIndex ? 'text-primary' : 'text-black'
                                                        }`}>
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <div
                                                className={`feature-img lg:max-w-[950px] lg:absolute right-[-25%] bottom-[-60px] z-[1] transition-all duration-500 ${index === activeIndex ? 'opacity-100 visible' : 'opacity-0 invisible'
                                                    }`}
                                            >
                                                <img src={feature.banner} alt="img"   loading="lazy" />
                                                <div className="feature-img-content lg:absolute bottom-0 left-[-100px] right-0 flex items-end justify-between lg:flex-row  flex-col gap-2">
                                                    <div className="feature-item-content flex-shrink-0 max-w-[400px]
                                                     bg-primarytwo lg:p-[40px] p-20 origin-bottom transition-all">
                                                        <p>
                                                            {feature.desc}
                                                        </p>
                                                    </div>

                                                    <div className="relative flex items-end gap-3 feature-counter-box">
                                                        <div className="relative p-5 bg-white wptb-counter2 w-[150px]">
                                                            <div className="counter-title">
                                                                <h3>50 +</h3>
                                                                <p>Photographers</p>
                                                            </div>
                                                        </div>
                                                        <div className="relative p-5 bg-primary wptb-counter2 w-[150px]">
                                                            <div className="counter-title">
                                                                <h3>100 +</h3>
                                                                <p>Events</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Features