import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import portfolio1 from './../../assets/img/profolio1.jpg';
import portfolio2 from './../../assets/img/profolio2.jpg';
import portfolio3 from './../../assets/img/profolio3.jpg';
import portfolio4 from './../../assets/img/profolio4.jpg';
import portfolio5 from './../../assets/img/profolio5.jpg';
import portfolio6 from './../../assets/img/profolio6.jpg';

const Portfolio = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // optional config
            animated: true,
            showClass: "fancybox-zoomIn",
            hideClass: "fancybox-zoomOut",
        });



        return () => {
            Fancybox.destroy();
        };
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className='bg-bg_1'>
            <Box sx={{ py: 10, width: '100%', zIndex: 999 }}>
                <Container maxWidth={false} sx={{ paddingX: 2 }}>
                    <Grid container spacing={4} columns={12} className="mb-3" alignItems="center">
                        <Grid item size={{ xs: 12, lg: 12 }} alignItems="center" data-aos="fade-up" data-aos-duration="1500">
                            <div className='heading-section d-flex' style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                                <h6 className="relative  z-[9999]  text-white px-2 inline-block before:content-[''] before:absolute before:left-0 before:top-0 before:h-[20px] before:w-full before:bg-primary before:-z-10" >
                                    All of Your
                                    beautiful memories
                                </h6>
                                <h1 className='mb-2 text-4xl text-normal font-third'> Our Portfolio</h1>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} columns={12} className="" alignItems="center">
                        <Grid item size={{ xs: 12, lg: 12 }} alignItems="center" data-aos="fade-up">
                            <div className="block gap-4 lg:columns-3 columns-1 md:columns-2">
                                {[portfolio1, portfolio6, portfolio2, portfolio3, portfolio4, portfolio5, portfolio1, portfolio3].map((img, index) => (
                                    <div key={index} className="mb-3.5  inline-block w-full overflow-hidden">
                                        <a href={img} data-fancybox="gallery">
                                            <img
                                                src={img}
                                                alt={`portfolio-${index}`}
                                                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                                            />
                                        </a>
                                    </div>
                                ))}
                                {/* <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio6} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio2} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio3} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio4} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio5} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div>

                                <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio1} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div>

                                <div className="mb-3.5 inline-block w-full overflow-hidden">
                                    <img src={portfolio3} alt="img" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
                                </div> */}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Portfolio