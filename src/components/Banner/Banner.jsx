import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import { useState } from 'react';

const slides = [
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
];
const Banner = () => {

  const [activeIndex, setActiveIndex] = useState(0);
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-12 text-white bg-opacity-50 md:px-24">
                <h2 className="mb-4 text-5xl font-bold md:text-7xl animate-title">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-lg md:text-2xl animate-subtitle">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Banner