"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/Navbar.css";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import AuthService from "../../service/auth";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setuserName] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path ? "active" : "";
  };

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = AuthService.isAuthenticated();
      const userName = AuthService.getUser()?.username || "İstifadəçi";

      setIsAuthenticated(isAuth);
      setuserName(userName);
    };

    checkAuth();

    // Storage dəyişikliklərini dinlə (digər tab-larda login/logout olduqda)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link href="/">
              <Image
                src="/dynamexLogo.svg"
                alt="Dynamex Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>

          <ul className="navbar-menu">
            <li>
              <Link
                href="/about"
                style={isActive("/about") ? { color: "#fd475d" } : {}}
              >
                Haqqimizda
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                style={isActive("/services") ? { color: "#fd475d" } : {}}
              >
                Xidmətlər
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                style={isActive("/projects") ? { color: "#fd475d" } : {}}
              >
                Tariflər
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                style={isActive("/faq") ? { color: "#fd475d" } : {}}
              >
                Yeniliklər
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={isActive("/contact") ? { color: "#fd475d" } : {}}
              >
                Əlaqə
              </Link>
            </li>
          </ul>

          {/* Right side items */}
          <div className="navbar-right">
            {/* Shopping Cart */}
            <Link href="/cart" className="cart-link">
              <div className="cart-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg" // ✅ Düzəldildi
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="cart-count">0</span>
              </div>
            </Link>

            {/* Authentication conditional rendering */}
            {IsAuthenticated && userName ? (
              <Link href="/dashboard">
                <button className="profile-button">
                  <Image
                    src="/profileIcon.png"
                    width={60}
                    height={60}
                    alt="profile-icon"
                  />
                  <p>{userName}</p>
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button className="login-btn">Daxil ol</button>
              </Link>
            )}

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
              <span
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          {/* Close button */}
          <div className="mobile-menu-header">
            <button className="close-btn" onClick={closeMenu}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="mobile-menu-list">
            <li>
              {IsAuthenticated && userName ? (
                <Link href="/dashboard" onClick={closeMenu}>
                  <button className="profile-button">
                    <Image
                      src="/profileIcon.png"
                      width={40}
                      height={40}
                      alt="profile-icon"
                    />
                    <span>{userName}</span>
                  </button>
                </Link>
              ) : (
                <Link href="/login">
                  <button className="login-btn">Daxil ol</button>
                </Link>
              )}
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                Haqqimizda
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMenu}>
                Xidmətlər
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={closeMenu}>
                Tariflər
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                Mağazalar
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={closeMenu}>
                Yeniliklər
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Əlaqə
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={closeMenu}>
                Səbət
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>
    </>
  );
}

export default Navbar;
