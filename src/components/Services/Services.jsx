import React, { useEffect, useMemo  } from 'react'
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from './../../assets/img/icon/icon-1.svg';
import icon1 from './../../assets/img/icon/icon-1-3.svg';
import icon2 from './../../assets/img/icon/icon-2.svg';
import icon22 from './../../assets/img/icon/icon-2-3.svg';
import icon3 from './../../assets/img/icon/icon-3.svg';
import icon33 from './../../assets/img/icon/icon-3-3.svg';
import icon4 from './../../assets/img/icon/icon-4.svg';
import icon44 from './../../assets/img/icon/icon-4-3.svg';
import icon5 from './../../assets/img/icon/icon-5.svg';
import icon55 from './../../assets/img/icon/icon-5-3.svg';
import icon6 from './../../assets/img/icon/icon-6.svg';
import icon66 from './../../assets/img/icon/icon-6-3.svg';
import icon7 from './../../assets/img/icon/icon-7.svg';
import icon77 from './../../assets/img/icon/icon-7-3.svg';
import icon8 from './../../assets/img/icon/icon-8.svg';
import icon88 from './../../assets/img/icon/icon-8-3.svg';
const Services = () => {

const services = useMemo(() => [
  {
    id: 1,
    icon: icon,
    iconHover: icon1,
    title: 'Wedding Photography',
  },
  {
    id: 2,
    icon: icon2,
    iconHover: icon22,
    title: 'Drone Cinematography',
  },
  {
    id: 3,
    icon: icon3,
    iconHover: icon33,
    title: 'Wedding Cinematography',
  },
  {
    id: 4,
    icon: icon4,
    iconHover: icon44,
    title: 'Personal Portfolio Shoot',
  },
  {
    id: 5,
    icon: icon5,
    iconHover: icon55,
    title: 'Wildlife Photography',
  },
  {
    id: 6,
    icon: icon6,
    iconHover: icon66,
    title: 'Studio Photography',
  },
  {
    id: 7,
    icon: icon7,
    iconHover: icon77,
    title: 'Photography Archive',
  },
  {
    id: 8,
    icon: icon8,
    iconHover: icon88,
    title: 'Photography Training',
  },
], []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='bg-bg_1'>
      <Box sx={{ py: 10, width: '100%', zIndex: 999 }}>
        <Container>
          <Grid container spacing={4} columns={12} justifyContent={'center'} className="" >
            <Grid item size={{ xs: 12, lg: 8 }} alignItems="center" justifyContent={'center'}>
              <div className='mb-6 heading-section d-flex' data-aos="fade-up" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"
              }}>
                <h6 className="relative  z-[9999]  text-white px-0.5 inline-block before:content-[''] before:absolute before:left-0 before:top-0 before:h-[20px] before:w-full before:bg-primary before:-z-10" >
                  Our Photography
                </h6>
                <h1 className='mb-2 text-4xl text-normal font-third'>Services Us</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint earum aliquam nihil cumque, omnis tempora pariatur quos! Magni porro consequatur voluptatem optio esse assumenda iste labore a, delectus dignissimos!</p>
              </div>
            </Grid>

          </Grid>

          <Grid container spacing={1} columns={12} justifyContent={'center'}>
            {services.map((service, index) => (
              <Grid
                item
                key={service.id}
               size={{ xs: 6, lg: 3, md: 6 }}
                alignItems="center"
                justifyContent={'center'}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={index * 300} // <-- Delay increases by 300ms for each card
              >
                <div className='p-6 transition-all duration-500 ease-in-out bg-black border border-red-200 rounded-xl services-box hover:bg-primary group'>
                  <div className='relative mb-4 min-h-[110px]'>
                    <img
                      src={service.icon}
                      alt="img"
                        loading="lazy"
                      className='transition-all duration-500 ease-in-out scale-100 opacity-100 normalimg group-hover:opacity-0 group-hover:scale-0'
                    />
                    <img
                      src={service.iconHover}
                      alt="img"
                        loading="lazy"
                      className='absolute top-0 left-0 transition-all duration-500 ease-in-out scale-0 opacity-0 hover-img group-hover:opacity-100 group-hover:scale-100'
                    />
                  </div>
                  <div>
                    <h6 className='pb-2 text-gray-300'>
                      {String(service.id).padStart(2, '0')}
                    </h6>
                    <h4 className='text-lg text-white lg-text-2xl'>
                      {service.title.split(' ').map((word, i) =>
                        i === 1 ? <br key={i} /> : ' '
                      )}
                      {service.title}
                    </h4>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Services