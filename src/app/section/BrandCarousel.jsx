"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import React from "react";

function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  const brands = [
    {
      id: 1,
      name: "Trendyol",
      logo: "https://cdn.brandfetch.io/idSUrLOWbH/w/256/h/256/theme/dark/icon.png",
      alt: "Trendyol Logo",
    },
    {
      id: 2,
      name: "DeFacto",
      logo: "https://cdn.brandfetch.io/idE8OZ5e_I/w/256/h/256/theme/dark/icon.png",
      alt: "DeFacto Logo",
    },
    {
      id: 3,
      name: "LC Waikiki",
      logo: "https://cdn.brandfetch.io/idtOs3dNOl/w/256/h/256/theme/dark/icon.png",
      alt: "LC Waikiki Logo",
    },
    {
      id: 4,
      name: "N11",
      logo: "https://cdn.brandfetch.io/idAnQJbQbp/w/256/h/256/theme/dark/icon.png",
      alt: "N11 Logo",
    },
    {
      id: 5,
      name: "Pierre Cardin",
      logo: "https://cdn.brandfetch.io/idPyQY3JKk/w/256/h/256/theme/dark/icon.png",
      alt: "Pierre Cardin Logo",
    },
    {
      id: 6,
      name: "Mango",
      logo: "https://cdn.brandfetch.io/idtJg7Kt0M/w/256/h/256/theme/dark/icon.png",
      alt: "Mango Logo",
    },
    {
      id: 7,
      name: "Koton",
      logo: "https://cdn.brandfetch.io/idJbfhbKC_/w/256/h/256/theme/dark/icon.png",
      alt: "Koton Logo",
    },
    {
      id: 8,
      name: "Boyner",
      logo: "https://cdn.brandfetch.io/idlCFMjsWQ/w/256/h/256/theme/dark/icon.png",
      alt: "Boyner Logo",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [brands.length]);

  // Calculate drag constraints
  useEffect(() => {
    if (carouselRef.current && trackRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;
      const maxDrag = trackWidth - carouselWidth;

      setDragConstraints({
        left: -maxDrag,
        right: 0,
      });
    }
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const brandItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const getVisibleBrands = () => {
    const itemsToShow = 6;
    const result = [];

    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % brands.length;
      result.push(brands[index]);
    }

    return result;
  };

  return (
    <section className="brand-carousel-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Məşhur Brendlər</h2>
          <p className="section-subtitle">
            Türkiyənin ən məşhur brendlərindən etibarlı şəkildə sifariş edin
          </p>
        </motion.div>

        <div className="carousel-container" ref={carouselRef}>
          <motion.button
            className="carousel-btn carousel-btn-prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Əvvəlki"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          <div className="carousel-wrapper">
            <motion.div
              className="carousel-track"
              ref={trackRef}
              drag="x"
              dragConstraints={dragConstraints}
              dragElastic={0.1}
              onDragEnd={(event, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;

                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
            >
              <AnimatePresence mode="wait">
                {getVisibleBrands().map((brand, index) => (
                  <motion.div
                    key={`${brand.id}-${currentIndex}`}
                    className="brand-item"
                    variants={brandItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="brand-logo-container"
                      whileHover={{
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                        y: -5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.alt}
                        width={100}
                        height={60}
                        className="brand-logo"
                      />
                    </motion.div>
                    <motion.p
                      className="brand-name"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {brand.name}
                    </motion.p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.button
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Sonrakı"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>

        <motion.div
          className="carousel-dots"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {brands.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${index + 1}. slayta keç`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BrandCarousel;
