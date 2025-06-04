import React from "react";
import HowWorkcard from "./HowWorkcard";
import "../styles/HowWork.css";
function HowWork() {
  return (
    <div className="how-work-container">
      <h2 className="section-title">Nece Isleyir? </h2>
      <div className="card-wrapper">
        <HowWorkcard />
      </div>
    </div>
  );
}

export default HowWork;
