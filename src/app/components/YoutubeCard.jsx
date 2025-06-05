"use client";
import React from "react";
import YoutubeData from "../data/youtubeSectionData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

function YoutubeCard() {
  return (
    <div className="youtube-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="youtube-swiper"
      >
        {YoutubeData.map((card, index) => (
          <SwiperSlide key={card.id}>
            <Link href={card.link} target="_blank" rel="noopener noreferrer">
              <div className="youtube-card">
                <div className="card-background-shapes">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                  <div className="shape-3"></div>
                </div>
                <div className="card-content">
                  <div className="card-image">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={330}
                      height={150}
                      className="youtube-thumbnail"
                    />
                    <div className="play-button">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <h3>{card.title}</h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="slider-navigation">
        <div className="swiper-button-prev-custom">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="swiper-button-next-custom">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom"></div>
    </div>
  );
}

export default YoutubeCard;
