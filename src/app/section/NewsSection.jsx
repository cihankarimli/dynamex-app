import React from "react";
import styles from "../styles/NewsSection.module.css";
import NewsSlider from "../components/NewsSlider";

function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.title}>
        <h3>Yeniliklər və xəbərlər</h3>
        <p>
          Xidmətlərimizə bağlı ən son yeniliklər və müxtəlif mövzularda
          məlumatlandırıcı bloqlar burada!
        </p>
      </div>
      <NewsSlider />
    </section>
  );
}

export default NewsSection;
