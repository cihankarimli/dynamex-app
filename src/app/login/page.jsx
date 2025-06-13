import React from "react";
import LoginInput from "../components/LoginInput";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="form-container">
        <div className="title">
          <h1>Dynamexe Xos Gelmissiniz!</h1>
          <p>Dynamexe Xos Gelmissiniz!</p>
        </div>
        <div className="login-form-container">
          <div className="login-input">
            <h3>Daxil Ol</h3>
            <LoginInput />
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
      </div>
    </>
  );
}

export default page;
