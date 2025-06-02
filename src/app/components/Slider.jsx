"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/SimpleSlider.module.css";

const SimpleSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Dynamex",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      bgClass: "slide1",
      image: "/dynamexLogo.svg",
      buttonContent: "Ətrafli",
    },
    {
      id: 2,
      title: "Fast and Reliable",
      content: "We ensure your packages are delivered on time, every time.",
      bgClass: "slide2",
      image: "/dynamexLogo.svg",
      buttonContent: "Ətrafli",
    },
    {
      id: 3,
      title: "Global Reach",
      content: "Connecting you to the world with our extensive network.",
      bgClass: "slide3",
      image: "/dynamexLogo.svg",
      buttonContent: "Ətrafli",
    },
    {
      id: 4,
      title: "Customer Support",
      content: "Our team is here to assist you 24/7 with any inquiries.",
      bgClass: "slide4",
      image: "/dynamexLogo.svg",
      buttonContent: "Ətrafli",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.customPrev}>←</div>
      <div className={styles.customNext}>→</div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: `.${styles.customNext}`,
          prevEl: `.${styles.customPrev}`,
        }}
        pagination={{ clickable: true, type: "bullets" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`${styles.slide} ${styles[slide.bgClass]}`}
          >
            <div className={styles.slideContent}>
              <motion.div
                key={activeIndex}
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.content}>{slide.content}</p>
              </motion.div>

              {/* Button animasiyasızdır */}
              <button className={styles.button}>{slide.buttonContent}</button>
            </div>

            {/* Image də animasiyasız */}
            <motion.div
              key={activeIndex}
              className={styles.imageContainer}
              initial={{ opacity: 0, x: 170 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={slide.image}
                  width={370}
                  height={370}
                  alt="Slide-image"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
