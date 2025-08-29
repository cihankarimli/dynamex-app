"use client";
import React, { useEffect, useState } from "react";
import NewsData from "../data/NewsData";
import Image from "next/image";
import Loading from "../components/loading/Loading";

function newsCard({ Selectoption }) {
  const [currentData, setCurrentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // yeni seçim olduqda loading başlayır
    const timer = setTimeout(() => {
      const data = NewsData[Selectoption];
      setCurrentData(data);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [Selectoption]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="card-container">
        {currentData.map((card) => (
          <div key={card.id} className="card">
            <Image src={card.image} width={200} height={200} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default newsCard;
