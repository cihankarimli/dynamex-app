"use client";

import React, { useState } from "react";
import "../styles/ShippingCalculator.css";
import useCounterAnimation from "../hooks/CounterAnimation";

const ShippingCalculator = () => {
  const [count, setCount] = useState(0.0);
  const [en, setEn] = useState(0);
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function Calculator() {
    const volumeWeight = (en * length * height) / 6000;
    let number;
    if (volumeWeight > weight) {
      number = volumeWeight * 5;
    } else {
      number = weight * 5;
    }

    setIsAnimating(true);
    setCount(parseFloat(number.toFixed(2)));

    setTimeout(() => setIsAnimating(false), 1500);
  }

  const animatedUSD = useCounterAnimation(count);
  const calculatedAzn = count * 1.7;
  const animatedAzn = useCounterAnimation(calculatedAzn);

  return (
    <div className="shipping-calculator-container">
      <div className="shipping-calculator-form-panel">
        <div className="shipping-calculator-form-group">
          <label className="shipping-calculator-label">Ölkə</label>
          <div className="shipping-calculator-select-wrapper">
            <select className="shipping-calculator-select">
              <option>Türkiyə</option>
            </select>
          </div>
        </div>

        <div className="shipping-calculator-form-row">
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">Çatdırılma növü</label>
            <div className="shipping-calculator-select-wrapper">
              <select className="shipping-calculator-select">
                <option>Filialə çatdırılma</option>
              </select>
            </div>
          </div>
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">Bağlamanın növü</label>
            <div className="shipping-calculator-select-wrapper">
              <select className="shipping-calculator-select">
                <option>Standart</option>
              </select>
            </div>
          </div>
        </div>

        <div className="shipping-calculator-form-row">
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">En</label>
            <div className="shipping-calculator-input-group">
              <input
                type="number"
                className="shipping-calculator-input"
                onChange={(e) => setEn(parseFloat(e.target.value) || 0)}
              />
              <div className="shipping-calculator-input-unit">sm</div>
            </div>
          </div>
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">Uzunluq</label>
            <div className="shipping-calculator-input-group">
              <input
                type="number"
                className="shipping-calculator-input"
                onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
              />
              <div className="shipping-calculator-input-unit">sm</div>
            </div>
          </div>
        </div>

        <div className="shipping-calculator-form-row">
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">Hündürlük</label>
            <div className="shipping-calculator-input-group">
              <input
                type="number"
                className="shipping-calculator-input"
                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
              />
              <div className="shipping-calculator-input-unit">sm</div>
            </div>
          </div>
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">Çəkisi</label>
            <div className="shipping-calculator-weight-input">
              <input
                type="number"
                className="shipping-calculator-input"
                step="0.1"
                onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              />
              <div className="shipping-calculator-select-wrapper">
                <select className="shipping-calculator-select">
                  <option>kq</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`shipping-calculator-calculate-btn ${
            isAnimating ? "animating" : ""
          }`}
          onClick={Calculator}
          disabled={isAnimating}
        >
          {isAnimating ? "Hesablanır..." : "Hesabla"}
        </button>

        <div
          className={`shipping-calculator-price-display ${
            isAnimating ? "animating" : ""
          }`}
        >
          <span className="price-usd">${animatedUSD.toFixed(2)}</span>
          <span className="price-separator">/</span>
          <span className="price-azn">{animatedAzn.toFixed(2)}AZN</span>
        </div>
      </div>

      <div className="shipping-calculator-info-panel">
        <h2 className="shipping-calculator-title">Kalkulyator</h2>
        <p className="shipping-calculator-description">
          Bağlamanın hər hansı bir tərəfinin ölçüsü (Türkiyə) 60 sm, (Amerika)
          60 sm (Çin) 60 sm və daha çox olarsa, bağlamanın həm həcmi, həm də
          fiziki çəkisi hesablanır. Hansı çəki yüksək olarsa, daşınma haqqı ona
          əsasən hesablanır.
        </p>
      </div>
    </div>
  );
};

export default ShippingCalculator;
