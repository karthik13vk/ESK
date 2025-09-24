import React, { useMemo } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/effect-fade';

import banner1 from '../../assets/img/banner_1.jpg';
import banner2 from '../../assets/img/banner_2.jpg';
import banner3 from '../../assets/img/banner_3.jpg';
import banner4 from '../../assets/img/banner_4.jpg';
import banner5 from '../../assets/img/banner_5.jpg';



const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleRefs = useRef([]);
  const subtitleRefs = useRef([]);

  useEffect(() => {
    // Animate title & subtitle whenever activeIndex changes
    if (titleRefs.current[activeIndex]) {
      gsap.fromTo(
        titleRefs.current[activeIndex],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }

    if (subtitleRefs.current[activeIndex]) {
      gsap.fromTo(
        subtitleRefs.current[activeIndex],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.3,
          duration: 1,
          ease: 'power3.out',
        }
      );
    }
  }, [activeIndex]);
const slides = useMemo(() => [
  {
    image: banner1,
    title: 'Capturing Emotions',
    subtitle: 'Every shot tells a story',
  },
  {
    image: banner2,
    title: 'Creative Perspectives',
    subtitle: 'Turning moments into memories',
  },
  {
    image: banner3,
    title: 'Timeless Memories',
    subtitle: 'Framed in perfection',
  },
  {
    image: banner4,
    title: 'Timeless Memories',
    subtitle: 'Framed in perfection',
  },
  {
    image: banner5,
    title: 'Timeless Memories',
    subtitle: 'Framed in perfection',
  },
], []);

  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="fade-swiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                 loading="lazy"
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-12 text-white bg-opacity-50 md:px-24">
                <h2
                  className="mb-4 text-5xl font-bold md:text-7xl"
                  style={{ textShadow: '2px 2px 10px #333' }}
                  ref={(el) => (titleRefs.current[index] = el)}
                >
                  {slide.title}
                </h2>
                <p
                  className="max-w-xl text-lg md:text-2xl"
                  ref={(el) => (subtitleRefs.current[index] = el)}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;