import React from "react";
import Slider from "../components/Slider";
import HowWork from "../components/HowWork";
import Tarrifs from "../section/Tarrifs";
import NewsSection from "../section/NewsSection";
import YoutubeSection from "../section/YoutubeSection";
import BrandCarousel from "../section/BrandCarousel";
import CalculotorSection from "../section/CalculotorSection";
function HomePage() {
  return (
    <>
      <Slider />
      <HowWork />
      <CalculotorSection />
      <Tarrifs />
      <NewsSection />
      <YoutubeSection />
      <BrandCarousel />
    </>
  );
}

export default HomePage;
