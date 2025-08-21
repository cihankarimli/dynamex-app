import Image from "next/image";
import React from "react";
import aboutData from "../data/AboutData.js";
import styles from "../styles/AboutPage.css";

function About() {
  return (
    <>
      <div className="about-container">
        <h1>Haqqimizda</h1>
        <p className="title">
          Bizi yaxından tanıdığınız halda müştərimizə çevrilmək ehtimalınız
          yüksəkdir.
        </p>
        <div className="about-image">
          <Image
            src="/haqqimizda.png"
            alt="about-img"
            width={825}
            height={400}
          />
          <div className="ping-card"></div>
        </div>
        <div className="text">
          <h3 className="headline">13 il öncə başlayan hekayəmiz...</h3>
          {aboutData.map((about) => (
            <div className="content" key={about.id}>
              <p>{about.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
