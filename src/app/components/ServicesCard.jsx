import React from "react";
import ServicesData from "../data/ServicesData";
import Image from "next/image";

function ServicesCard() {
  return (
    <div className="card-container">
      {ServicesData.map((card) => (
        <div key={card.id} className="card">
          <div className="card-image">
            <Image src={card.image} alt={card.title} width={70} height={70} />
          </div>
          <div className="card-content">
            <h5>{card.title}</h5>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesCard;
