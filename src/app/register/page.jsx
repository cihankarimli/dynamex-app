import React from "react";
import RegisterInput from "../components/RegisterInput";
import Image from "next/image";
import "../styles/registerForm.css";

function page() {
  return (
    <>
      <div className="form-container">
        <div className="title">
          <h1>Dynamex-ə xoş gəlmişsiniz!</h1>
          <p>Qeydiyyat</p>
        </div>
        <div className="register-form-container">
          <div className="register-input">
            <h3>Qeydiyyat Formu</h3>
            <RegisterInput />
          </div>
          <div className="register-image">
            <h3>Nə üçün dynamex?</h3>
            <Image
              src="/registerImage.png"
              width={452}
              height={226}
              alt="register-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
