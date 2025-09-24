import React from 'react'
import Banner from '../components/Banner/Banner'
import Sitemarquee from '../components/Sitemarquee/Sitemarquee'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Video from '../components/Video/Video'
import Socialmedia from '../components/socialmedia/Socialmedia'
import Portfolioinner from '../components/Portfolio/Portfolioinner'
import Review from '../components/Review/Review'
import Features from '../components/Features/Features'
import Contact from '../components/Contact/Contact'

const Home = () => {
    return (
        <div  className="app-container">
            <Banner />
            <Sitemarquee />
            <About />
            <Services />
            <Video />
            <Socialmedia />
            <Portfolioinner />
            <Review />
            <Features />
            <Contact />
        </div>
    )
}

export default Home