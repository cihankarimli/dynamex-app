"use client";

import { useState } from "react";
import CountrySelector from "../components/CountrySelector";
import TariffTable from "../components/TariffTable";
import styles from "../styles/Tariffs.module.css";
export default function Tariffs() {
  const [selectedCountry, setSelectedCountry] = useState("Türkiye");

  return (
    <>
      <h1 className={styles.title}>Tariflər</h1>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <CountrySelector
              selectedCountry={selectedCountry}
              onCountryChange={setSelectedCountry}
            />

            <TariffTable selectedCountry={selectedCountry} />
          </div>
        </div>
      </div>
    </>
  );
}
