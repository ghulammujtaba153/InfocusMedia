"use client";

import CaseStudies from "@/components/home/CaseStudies";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import Footer from "@/components/home/Footer";
import FooterGlobe from "@/components/home/FooterGlobe";
import HeroSection from "@/components/home/HeroSection";
import InsightGlobe from "@/components/home/InsightGlobe";
import SpotLightClients from "@/components/home/SpotLightClients";
import Location from "@/components/home/team/Location";
import SheikhCaseStudiesContainer from "@/components/home/team/PortraitSection";
import TeamSection from "@/components/home/team/TeamSection";
import TopSection from "@/components/home/TopSection";
import WorkSection from "@/components/home/WorkSection";
import { useEffect, useRef } from "react";

export default function Home() {
  

  return (
    <div className="overflow-x-hidden">
      {/* <TopSection/> */}
      <HeroSection/>
      <WorkSection/>
      <SpotLightClients/>
      <ExpertiseSection/>
      <CaseStudies/>

      {/* <SheikhCaseStudiesContainer/> */}
      
      <InsightGlobe/>
      <TeamSection/>
      <Location/>
      <FooterGlobe/>
      <Footer/>
    </div>
  );
}