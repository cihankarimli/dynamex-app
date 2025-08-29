"use client";
import React from "react";

export default function ContactDetails({ city }) {
  return (
    <div className="info">
      <div className="city-details">
        <div className="detail-item">
          <strong>📍</strong>
          <p>{city.address}</p>
        </div>
        <div className="detail-item">
          <strong>📞</strong>
          <p>{city.phone}</p>
        </div>
        <div className="detail-item">
          <strong>✉️</strong>
          <p>{city.email}</p>
        </div>
      </div>
    </div>
  );
}
