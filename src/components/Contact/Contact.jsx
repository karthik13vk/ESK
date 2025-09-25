import { Box, Container, Grid } from '@mui/material'
import contactbg from './../../assets/img/contact-bg-9.jpg'
import React from 'react'

const Contact = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat  before:content-[''] before:absolute before:inset-0 before:bg-black/60  before:z-0" style={{
            backgroundImage: `url(${contactbg})`,
        }}>
            <Box
                sx={{
                    py: 10,
                    width: '100%',
                    zIndex: 999,
                    position: 'relative',
                    overflow: 'hidden',
                }}

            >
                <Container>
                    <div
                        className="relative bg-cover bg-center bg-no-repeat border border-2 border-white  rounded-[14px] before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:rounded-[14px] before:z-0"
                    >

                        <div className="relative z-10 p-6 sm:p-10">
                            {/* Header Section */}
                            <div className="mb-10 text-center">
                                <div className='mb-6 heading-section d-flex' data-aos="fade-up" style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "20px"
                                }}>
                                    <h6 className="inline-block relative px-2 text-sm font-semibold text-white uppercase tracking-wide z-10 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-primary before:rounded-md">
                                        Get in Touch
                                    </h6>
                                    <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl font-third">
                                        Contact Us
                                    </h1>
                                </div>
                            </div>

                            {/* Form Grid */}
                            <Container>
                                <Grid container spacing={4}>
                                    {/* Name - full width */}
                                    <Grid item xs={12} sx={{ width: '100%' }}>
                                        <div className="relative form-control group">
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder=" "
                                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-primary bg-white/90"
                                            />
                                            <label
                                                htmlFor="name"
                                                className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-primary bg-white px-1"
                                            >
                                                Your Name
                                            </label>
                                        </div>
                                    </Grid>

                                    {/* Email - half width on md+, full on mobile */}
                                    <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                                        <div className="relative form-control group">
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder=" "
                                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-primary bg-white/90"
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-primary bg-white px-1"
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                                        <div className="relative form-control group">
                                            <input
                                                type="text"
                                                id="phone"
                                                placeholder=" "
                                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg peer focus:outline-none focus:ring-2 focus:ring-primary bg-white/90"
                                            />
                                            <label
                                                htmlFor="phone"
                                                className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-primary bg-white px-1"
                                            >
                                                Phone
                                            </label>
                                        </div>
                                    </Grid>

                                    {/* Message - full width */}
                                    <Grid item xs={12} sx={{ width: '100%' }}>
                                        <div className="relative form-control group">
                                            <textarea
                                                id="message"
                                                placeholder=" "
                                                rows={5}
                                                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg resize-none peer focus:outline-none focus:ring-2 focus:ring-primary bg-white/90"
                                            ></textarea>
                                            <label
                                                htmlFor="message"
                                                className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-primary bg-white/90 px-1"
                                            >
                                                Your Message
                                            </label>
                                        </div>
                                    </Grid>

                                    {/* Button */}
                                    <Grid item xs={12} sx={{ width: '100%' }}>

                                        <div className="">
                                            <div className="relative group w-fit" data-aos="fade-up" data-aos-duration="1500">
                                                <button className="relative z-10 px-6 py-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-105 group-hover:shadow-2xl">
                                                    Send Message
                                                </button>
                                                <span className="absolute inset-0 z-0 transition-all duration-500 scale-100 rounded-lg opacity-50 blur-md bg-gradient-to-r from-[#d9a15d] via-[#ddac78] to-[#eec295] group-hover:scale-110 group-hover:opacity-70"></span>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>

                        </div>
                    </div>
                </Container>
            </Box>
        </div>
    )
}

export default Contact