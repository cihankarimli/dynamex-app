"use client";

import React, { useState } from "react";
import "../styles/ShippingCalculator.css";

const ShippingCalculator = () => {
  const [count, setcount] = useState(0.0);
  const [en, setEn] = useState(0);
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setweight] = useState(0);
  function Calculotor() {
    const valumeWeight = (en * length * height) / 6000;
    let number;
    if (valumeWeight > weight) {
      number = valumeWeight * 5;
    } else {
      number = weight * 5;
    }
    setcount(number.toFixed(2));
  }

  let Azn = count * 1.7;
  Azn = Azn.toFixed(2);
  return (
    <div className="shipping-calculator-container">
      <div className="shipping-calculator-form-panel">
        {/* Country Selection */}
        <div className="shipping-calculator-form-group">
          <label className="shipping-calculator-label">Ölkə</label>
          <div className="shipping-calculator-select-wrapper">
            <select className="shipping-calculator-select">
              <option>Türkiyə</option>
            </select>
          </div>
        </div>

        {/* Shipping Options */}
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

        {/* Dimensions */}
        <div className="shipping-calculator-form-row">
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">En</label>
            <div className="shipping-calculator-input-group">
              <input
                type="number"
                className="shipping-calculator-input"
                onChange={(e) => setEn(e.target.value)}
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
                onChange={(e) => setLength(e.target.value)}
              />
              <div className="shipping-calculator-input-unit">sm</div>
            </div>
          </div>
        </div>

        {/* Height and Weight */}
        <div className="shipping-calculator-form-row">
          <div className="shipping-calculator-form-group">
            <label className="shipping-calculator-label">Hündürlük</label>
            <div className="shipping-calculator-input-group">
              <input
                type="number"
                className="shipping-calculator-input"
                onChange={(e) => setHeight(e.target.value)}
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
                onChange={(e) => setweight(e.target.value)}
              />
              <div className="shipping-calculator-select-wrapper">
                <select className="shipping-calculator-select">
                  <option>kq</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          className="shipping-calculator-calculate-btn"
          onClick={Calculotor}
        >
          Hesabla
        </button>

        {/* Price Display */}
        <div className="shipping-calculator-price-display">
          ${count}/{Azn}AZN
        </div>
      </div>

      {/* Right Panel - Calculator Info */}
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
