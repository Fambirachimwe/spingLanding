import React from 'react'
import ContentWrapper from './ContentWrapper'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import LatestSection from './LatestSection'
import IntegrateSection from './IntegrateSection'
import Footer from './Footer'

const Landing = () => {
    return (
        <div className='overflow-x-hidden'>

            <ContentWrapper >

                <Navbar />


                <HeroSection />

                <Features />

                <LatestSection />
                <IntegrateSection />
            </ContentWrapper>

            <div className="footer bg-[#010B1C]">
                <ContentWrapper >

                    <Footer />

                </ContentWrapper>

            </div>

        </div>
    )
}

export default Landing
