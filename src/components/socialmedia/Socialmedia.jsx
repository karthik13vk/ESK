import React, { useEffect, useMemo } from 'react'
import socialimg from './../../assets/img/social1.jpg';
import socialimg2 from './../../assets/img/social2.jpg';
import socialimg3 from './../../assets/img/social3.jpg';
import socialimg4 from './../../assets/img/social4.jpg';
import socialimg5 from './../../assets/img/social5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Socialmedia = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const socialImages = useMemo(() => [
        socialimg5,
        socialimg2,
        socialimg3,
        socialimg4,
        socialimg,
    ], []);
    return (
        <div className='relative py-10 overflow-hidden'>
            <div className='flex flex-wrap justify-center align-middle md:flex-nowrap'>
                {socialImages.map((img, index) => (
                    <div
                        key={index}
                        className='max-w-36 md:max-w-full'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay={index * 300}
                    >
                        <img src={img} alt={`social-${index}`} loading="lazy" className='object-cover w-full' />
                    </div>
                ))}
                {/* <div className='max-w-36 md:max-w-full'  data-aos="fade-up" data-aos-duration="1500">
                    <img src={socialimg2} alt="img" className='object-cover w-full' />
                </div>
                <div className='max-w-36 md:max-w-full'  data-aos="fade-up" data-aos-duration="1500">
                    <img src={socialimg3} alt="img" className='object-cover w-full' />
                </div>
                <div className='max-w-36 md:max-w-full'  data-aos="fade-up" data-aos-duration="1500">
                    <img src={socialimg4} alt="img" className='object-cover w-full' />
                </div>
                <div className='max-w-36 md:max-w-full'  data-aos="fade-up" data-aos-duration="1500">
                    <img src={socialimg} alt="img" className='object-cover w-full' />
                </div> */}
            </div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="relative group w-fit" data-aos="fade-up" data-aos-duration="1500">
                    <button className="relative z-10 px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-105 group-hover:shadow-2xl">
                        Follow Us On Instagram
                    </button>
                    <span className="absolute inset-0 z-0 transition-all duration-500 scale-100 rounded-lg opacity-50 blur-md bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-110 group-hover:opacity-70"></span>
                </div>
            </div>

        </div>
    )
}

export default Socialmedia