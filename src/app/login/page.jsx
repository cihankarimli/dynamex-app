import LoginInput from "../components/LoginInput.jsx";
import Image from "next/image";
import Link from "next/link";
import "../styles/Login.css";

export default function Page() {
  return (
    <div className="form-container">
      <div className="title">
        <h1>Dynamex-ə xoş gəlmişsiniz!</h1>
        <p>Dynamex platformasına daxil olun</p>
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
            alt="Qeydiyyat şəkli"
            priority
          />
          <div className="register-btn">
            <span>Hesabınız yoxdur?</span>
            <Link href="/register" className="register-link">
              Qeydiyyatdan keç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
