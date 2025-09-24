import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Box, Button, Paper, Container, } from '@mui/material';
import portfolio1 from './../../assets/img/profolio1.jpg';
import portfolio2 from './../../assets/img/profolio2.jpg';
import portfolio3 from './../../assets/img/profolio3.jpg';
import portfolio4 from './../../assets/img/profolio4.jpg';
import portfolio5 from './../../assets/img/profolio5.jpg';
import portfolio6 from './../../assets/img/profolio6.jpg';
import { Link } from 'react-router-dom';

const Portfolioinner = () => {

    const portfolioImages = useMemo(() => [
        portfolio1,
        portfolio6,
        portfolio2,
        portfolio3,
        portfolio4,
        portfolio5,
        portfolio1,
        portfolio3,
    ], []);
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
                                <h6 className="inline-block relative px-2 text-sm font-normal text-white uppercase tracking-wide z-10 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-primary before:rounded-md" >
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
                                {portfolioImages.map((img, index) => (
                                    <div key={index} className="mb-3.5 inline-block w-full overflow-hidden ">
                                        <a href={img} data-fancybox="gallery" className="relative block w-full h-full group">
                                            <img
                                                src={img}
                                                loading="lazy"
                                                alt={`portfolio-${index}`}
                                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center text-sm text-white transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                                                Click Here
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Grid>
                    
                    </Grid>
                        <Grid item size={{ xs: 12 }} display={'flex'} alignItems="center" justifyContent={"center" } >
                            <div className="relative flex items-center justify-center text-center group w-fit" data-aos="fade-up" data-aos-duration="1500">
                                   <Link className="relative z-10 px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-105 group-hover:shadow-2xl"
                                    to="/portfolio"> View More</Link>
                                <span className="absolute inset-0 z-0 transition-all duration-500 scale-100 rounded-lg opacity-50 blur-md bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-110 group-hover:opacity-70"></span>
                            </div>
                        </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Portfolioinner