// components/BrandCarousel.js

import React from "react";
import "../styles/Carousel.css";
import Image from "next/image";

function BrandCarousel() {
  const brands = [
    { name: "DEFACTO", logo: "/defactoLogo.png" },
    { name: "LC WAIKIKI", logo: "/WaikikiLogo.png" },
    { name: "N11", logo: "/n11Logo.jpg" },
    { name: "Cardin", logo: "/CardinLogo.jpg" },
    { name: "Mongo", logo: "/mongoLogo.png" },
    { name: "Trendyol", logo: "/trendyolLogo.png" },
  ];

  return (
    <section className="brand-carousel">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {/* Sonsuz effekt üçün array-i iki dəfə yazırıq */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-item">
                {brand.isSpecial ? (
                  <div className="brand-n11">
                    <span className="brand-logo">
                      <Image
                        src={brand.logo}
                        width={100}
                        height={100}
                        alt={brand.name}
                      />
                    </span>
                  </div>
                ) : (
                  <span className="brand-logo">
                    <Image
                      src={brand.logo}
                      width={60}
                      height={60}
                      alt={brand.name}
                    />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandCarousel;
