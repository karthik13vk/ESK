import React from 'react'
// import { IoCamera  } from "react-icons/io";
import { IoCameraOutline, IoCamera } from "react-icons/io5";
import Marquee from 'react-fast-marquee';
const Sitemarquee = () => {
    return (
        <div className='py-6 bg-primary'>
            <Marquee speed={50} gradient={false} style={{ overflowY: 'hidden', }}>
                <span className="flex items-center justify-between gap-5 mx-4 overflow-y-hidden text-6xl text-transparent"
                > <span style={{
                    color: 'white',
                    WebkitTextStroke: '1px white',
                    fontSize: '50px',
                    overflowY: 'hidden',
                    fontWeight: 'normal',
                }}> <IoCameraOutline /> </span>
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>Rituals</span>  </span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl"
                > <span style={{
                    color: 'white',
                    WebkitTextStroke: '1px white',
                    fontSize: '50px',
                    overflowY: 'hidden',
                    fontWeight: 'normal',
                }}> <IoCamera /></span> <span style={{
                    color: 'white',
                    // WebkitTextStroke: '1px white',
                    fontSize: '50px',
                    overflowY: 'hidden',
                    fontWeight: 'normal',
                }}>Bridal Portraits</span></span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl ">
                    <span style={{
                        color: 'white',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}><IoCameraOutline /></span> <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>Groom Portraits</span> </span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl">
                    <span style={{
                        color: 'white',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}><IoCamera /></span>
                    <span style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>Candid Moments</span>   </span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl"
                >
                    <span style={{
                        color: 'white',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}><IoCameraOutline /></span>
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>Baby shower</span> </span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl"
                >
                    <span style={{
                        color: 'white',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>
                        <IoCamera />
                    </span>
                    <span style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>
                        Wedding Reception
                    </span>
                </span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl">
                    <span style={{
                        color: 'white',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}><IoCameraOutline /></span>
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>Couple Portraits</span>
                </span>
                <span className="flex items-center justify-between gap-5 mx-4 text-6xl">
                    <span style={{
                        color: 'white',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>
                        <IoCamera />
                    </span>
                    <span style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        overflowY: 'hidden',
                        fontWeight: 'normal',
                    }}>Outdoor</span>
                </span>
            </Marquee>
        </div>
    )
}

export default Sitemarquee