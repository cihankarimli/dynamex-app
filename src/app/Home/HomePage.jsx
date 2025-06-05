import React from "react";
import Slider from "../components/Slider";
import HowWork from "../components/HowWork";
import Tarrifs from "../section/Tarrifs";
import NewsSection from "../section/NewsSection";
import YoutubeSection from "../section/YoutubeSection";
import BrandCarousel from "../section/BrandCarousel";
function HomePage() {
  return (
    <>
      <Slider />
      <HowWork />
      <Tarrifs />
      <NewsSection />
      <YoutubeSection />
      <BrandCarousel />
    </>
  );
}

export default HomePage;
