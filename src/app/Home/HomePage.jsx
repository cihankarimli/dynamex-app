import React from "react";
import Slider from "../components/Slider";
import HowWork from "../components/HowWork";
import Tarrifs from "../section/Tarrifs";
import NewsSection from "../section/NewsSection";
function HomePage() {
  return (
    <>
      <Slider />
      <HowWork />
      <Tarrifs />
      <NewsSection />
    </>
  );
}

export default HomePage;
