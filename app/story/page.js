import Footer from '@/components/home/Footer'
import FooterGlobe from '@/components/home/FooterGlobe'
import BuilderSection from '@/components/our-story/BuilderSection'
import HeroSection from '@/components/our-story/HeroSection'
import OpportunitySection from '@/components/our-story/OpportunitySection'
import TimeLine from '@/components/our-story/TimeLine'
import React from 'react'

const page = () => {
  return (
    <div className="w-full">
      <HeroSection/>
      <BuilderSection/>
      <TimeLine/>
      <OpportunitySection/>
      <FooterGlobe/>
      <Footer/>
    </div>
  )
}

export default page
