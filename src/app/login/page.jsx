import LoginInput from "../components/LoginInput";
import Image from "next/image";
import Link from "next/link";
import "../styles/Login.css";

export const metadata = {
  title: "Giriş - Dynamex",
  description: "Dynamex platformasına daxil olun",
};

export default function LoginPage() {
  return (
    <div className="form-container">
      {/* Page header */}
      <div className="title">
        <h1>Dynamex-ə xoş gəlmişsiniz!</h1>
        <p>Dynamex platformasına daxil olun</p>
      </div>

      {/* Main content */}
      <div className="login-form-container">
        {/* Login form - Client Component */}
        <div className="login-input">
          <h3>Daxil Ol</h3>
          <LoginInput />
        </div>

        {/* Right side - qeydiyyat linki */}
        <div className="register-button-row">
          <Image
            src="/login_right.svg"
            width={314}
            height={313}
            alt="Giriş şəkli"
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
