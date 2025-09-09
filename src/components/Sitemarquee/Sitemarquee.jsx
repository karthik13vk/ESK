import React from 'react'
import Marquee from 'react-fast-marquee';
const Sitemarquee = () => {
    return (
        <div className='py-6 bg-primary'>
            <Marquee speed={50} gradient={false}>
                <span className="mx-8 text-6xl text-transparent"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Rituals</span>
                <span className="mx-8 text-6xl"
                    style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Bridal Portraits</span>
                <span className="mx-8 text-6xl "
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Groom Portraits</span>
                <span className="mx-8 text-6xl"
                    style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Candid Moments</span>
                <span className="mx-8 text-6xl"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Baby shower</span>
                <span className="mx-8 text-6xl"
                    style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Wedding Reception</span>
                <span className="mx-8 text-6xl"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Couple Portraits</span>
                <span className="mx-8 text-6xl"
                    style={{
                        color: 'white',
                        // WebkitTextStroke: '1px white',
                        fontSize: '50px',
                        fontWeight: 'normal',
                    }}>Outdoor </span>
            </Marquee>
        </div>
    )
}

export default Sitemarquee