import styles from "../styles/CountrySelector.module.css";
import TariffData from "../data/tariffData";

export default function CountrySelector({ selectedCountry, onCountryChange }) {
  const countries = Object.keys(TariffData);

  return (
    <div className={styles.selector}>
      <h3 className={styles.title}>Ölkələr üzrə</h3>
      <div className={styles.buttons}>
        {countries.map((country) => (
          <button
            key={country}
            className={`${styles.button} ${
              selectedCountry === country ? styles.active : styles.inactive
            }`}
            onClick={() => onCountryChange(country)}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  );
}
