import React, { useState } from 'react'
import { motion , AnimatePresence  } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';

// Import Swiper styles
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
const Banner = () => {
  const slideAnimation = {
    initial: {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    animate: {
      clipPath: "circle(150% at 50% 50%)",
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  const banners = [banner1, banner2, banner3];
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
             modules={[EffectCreative, Autoplay]}
             effect="creative"
             loop={true}
             speed={1000}
             autoplay={{
               delay: 3000,
               disableOnInteraction: false,
             }}
             grabCursor={true}
             creativeEffect={{
      prev: {
         translate: ["-100%", "-100%", -600],
         rotate: [30, 30, -90],
         scale: 0.5,
         opacity: 0,
       },
       next: {
         translate: ["100%", "100%", -600],
         rotate: [-30, -30, 90],
         scale: 0.5,
         opacity: 0,
       },
             }}
     
     
           >
             <SwiperSlide>
               <img src={banner1} alt="img" className='object-cover w-full h-lvh' />
             </SwiperSlide>
             <SwiperSlide>
               <img src={banner2} alt="img" className='object-cover w-full h-lvh' />
             </SwiperSlide>
             <SwiperSlide>
     
               <img src={banner3} alt="img" className='object-cover w-full h-lvh' />
             </SwiperSlide>
     
             ...
           </Swiper>

<Swiper
  modules={[Autoplay]}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 5000 }}
  onSlideChange={(swiper) => {
    setActiveIndex(swiper.realIndex);
  }}
>
  {banners.map((banner, index) => (
    <SwiperSlide key={index}>
      <div className="relative w-full overflow-hidden h-lvh">
        <AnimatePresence mode="wait">
          {activeIndex === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, clipPath: 'circle(0% at 50% 50%)' }}
              animate={{ opacity: 1, scale: 1, clipPath: 'circle(150% at 50% 50%)' }}
              exit={{ opacity: 0, scale: 0.8, clipPath: 'circle(0% at 50% 50%)' }}
              transition={{ duration: 3,  ease: [0.25, 0.1, 0.25, 1]}}
              className="absolute inset-0"
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >
                Welcome to the Slide
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  )
}

export default Banner