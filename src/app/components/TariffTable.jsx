import { useState } from "react";
import styles from "../styles/TariffTable.module.css";
import tariffData from "../data/tariffData";

export default function TariffTable({ selectedCountry }) {
  const [activeTab, setActiveTab] = useState("branch");
  const currentData = tariffData[selectedCountry]?.[activeTab] || [];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "branch" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("branch")}
        >
          Filiala çatdırılma
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "home" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("home")}
        >
          Birbaşa ünvana çatdırılma
        </button>
      </div>

      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <div className={styles.header}>
            <div className={styles.headerCell}></div>
          </div>

          {currentData.map((row, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.weightCell}>{row.weight}</div>
              <div className={styles.priceCell}>
                <div className={styles.categoryLabel}>Standart</div>
                <div className={styles.price}>{row.standard}</div>
              </div>
              <div className={styles.priceCell}>
                <div className={styles.categoryLabel}>Kosmetik məhsullar</div>
                <div className={styles.price}>{row.cosmetic}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
