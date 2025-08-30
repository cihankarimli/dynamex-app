import React from "react";

import Image from "next/image";

function ServicesCard({ servicesData }) {
  console.log(servicesData);
  return (
    <div className="card-container">
      {servicesData.map((card) => (
        <div key={card.id} className="card">
          <div className="card-image">
            <Image
              src="/cb4fa7ca6054ec0cae0f54b1b188a471ef15c720.gif"
              alt={card.title}
              width={80}
              height={80}
            />
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
