import React from "react";
import LoginInput from "../components/LoginInput";
import Image from "next/image";
import Link from "next/link";
import "../styles/Login.css"; // Ensure you have the correct path to your CSS file

function page() {
  return (
    <>
      <div className="form-container">
        <div className="title">
          <h1>Dynamex-ə xoş gəlmişsiniz !</h1>
          <p>Dynamex-ə xoş gəlmişsiniz !</p>
        </div>
        <div className="login-form-container">
          <div className="login-input">
            <h3>Daxil Ol</h3>
            <LoginInput />
          </div>
          <div className="register-button-row">
            <Image
              src="/login_right.svg"
              width={314}
              height={313}
              alt="register-img"
            />
            <div className="register-btn">
              <span>Hesabınız yoxdur?</span>
              <Link href="/register" className="register-link">
                <span>Qeydiyyatdan keç</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
