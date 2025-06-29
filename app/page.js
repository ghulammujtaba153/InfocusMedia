"use client";

import CaseStudies from "@/components/home/CaseStudies";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import Footer from "@/components/home/Footer";
import FooterGlobe from "@/components/home/FooterGlobe";
import HeroSection from "@/components/home/HeroSection";
import InsightGlobe from "@/components/home/InsightGlobe";
import SpotLightClients from "@/components/home/SpotLightClients";
import Location from "@/components/home/team/Location";
import TeamSection from "@/components/home/team/TeamSection";
import TopSection from "@/components/home/TopSection";
import TransformGlobe from "@/components/home/TransformGlobe";
import WorkSection from "@/components/home/WorkSection";
import { useEffect, useRef } from "react";

export default function Home() {
  

  return (
    <>
      <TopSection/>
      <HeroSection/>
      <WorkSection/>
      <SpotLightClients/>
      <ExpertiseSection/>
      <CaseStudies/>
      <TransformGlobe/>
      <InsightGlobe/>
      <TeamSection/>
      <Location/>
      <FooterGlobe/>
      <Footer/>
    </>
  );
}