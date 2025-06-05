import React from "react";
import YoutubeCard from "../components/YoutubeCard";
import "../styles/YoutubeSection.css";

function YoutubeSection() {
  return (
    <div className="youtube-section">
      <div className="youtube-container">
        <div className="youtube-header">
          <h2>Youtube-da bizi izləyin</h2>
        </div>
        <div className="youtube-content">
          <YoutubeCard />
        </div>
      </div>
    </div>
  );
}

export default YoutubeSection;
