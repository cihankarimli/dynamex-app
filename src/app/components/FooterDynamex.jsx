"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/FooterDynamex.css";

function FooterDynamex() {
  const [dropdown, setdropdown] = useState(false);
  function dropdownPage() {
    setdropdown(!dropdown);
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="Dynamic Express Logo"
                  width={200}
                  height={60}
                  className="logo-image"
                />
              </Link>
            </div>
            <p className="copyright">
              © 2025 Dynamex.az. Bütün hüquqlar qorunur
            </p>
          </div>

          {/* Menu Section */}
          <div className="footer-section">
            <h3 className="footer-title">Menu</h3>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Xidmətlər
                </Link>
              </li>
              <li>
                <Link href="/brojects" className="footer-link">
                  Tariflər
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Mağazalar
                </Link>
              </li>
              <li>
                <Link href="/fag" className="footer-link">
                  Yeniliklər
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-section">
            <h3 className="footer-title">Kömək</h3>
            <ul className="footer-links">
              <li>
                <Link href="/faq" className="footer-link">
                  Tez-tez verilən suallar
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Şərtlər
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="footer-link">
                  Gizlilik siyasəti
                </Link>
              </li>
              <li>
                <Link href="/prohibited-items" className="footer-link">
                  İstifadəçi Razılaşması
                </Link>
              </li>
              <li>
                <Link href="/news" className="footer-link">
                  Yeniliklər
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h3 className="footer-title">Əlaqə</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <span className="" onClick={dropdownPage}>
                    Unvanlar
                    <span className={`arrow-icon ${dropdown ? "rotate" : ""}`}>
                      {" "}
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  {dropdown ? (
                    <div>
                      <p>28 may Dəmir yolu vaqzalı 2-ci mərtəbə AZ 1020</p>
                      <span>Gəncə ş.</span>
                      <p>, AZ 2013 Kapaz r-nu, N.Nərimanov pr, 42C</p>
                      <p>Sumqayıt ş.H.Əliyev pr.493-503.14 mərtəbənin yanı.</p>
                      <p>Xaiqlar Dostluğu.İsmayıl Məmmədov küçəsi 6/42114A</p>
                      <p>Yasamal.Abbas Mirzə Şərifzadə 440M</p>
                      <p>Xırdalan ş. H. Əliyev pr. 11, Kristal Abşeron 2</p>
                      <p>əhmədi Ukrayna dairəsi, Gəncə pr, Vurğun Tau küç 2</p>
                      <p>Bakıxanov qəs., S. Qocayev küç , AZ1132-in yanı</p>
                      <p>20 yanvar, Məmməd Cəfər Cəfərov</p>
                      <p>
                        Nərimanov KOB evi Ziya Bünyadov 38C KOB Evi 2 Mərtəbə 91
                        Pəncərə
                      </p>
                      <p>
                        Nərimanov Goex Təhvil məntəqəsi.N.Nərimanov, əhməd
                        Rəcəbli 4/6
                      </p>
                      <p>
                        Elmlər Akademiyası Skybox Təhvil məntəqəsi.Yasamal
                        rayonu. Şəfayət Mehdiyev küçəsi 16B
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <p>Problemli şəbə ilə əlaqə: info@dynamex.az</p>
                  <p>Əməkdaşlıq üçün : hr@dynamex.az</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <p>*7171</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterDynamex;
