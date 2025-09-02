"use client";
import { useState } from "react";
import RegisterData from "../data/registerData";
import { FormInput } from "../components/FormInput";
import AuthService from "../../service/auth";
import "../styles/registerForm.css";
import Image from "next/image";
import Loading from "../hooks/LoadingPage";

function RegisterInput() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await AuthService.register(formData);

      // Token saxla
      if (response.token) {
        AuthService.setToken(response.token);
      }
      // İstifadəçi məlumatlarını saxla
      if (response.user) {
        AuthService.setUser({
          name: response.user.username,
          surname: response.user.userSurname,
          email: response.user.email,
        });
      }

      setFormData({});

      // 2 saniyә sonra dashboard-a yönlәndir
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      setError(error.message || "Qeydiyyat zamanı xәta baş verdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="form-input" onSubmit={handleSubmit}>
        {RegisterData.map((item) => (
          <FormInput
            key={item.id}
            item={item}
            value={formData[item.name]}
            onChange={handleInputChange}
          />
        ))}

        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Mәni xatırla</label>
        </div>

        {error && (
          <div
            className="error-message"
            style={{
              color: "#ff4444",
              padding: "10px",
              background: "#ffe6e6",
              borderRadius: "4px",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            ❌ {error}
          </div>
        )}

        {success && (
          <div
            className="success-message"
            style={{
              color: "#00aa00",
              padding: "10px",
              background: "#e6ffe6",
              borderRadius: "4px",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            ✅ {success}
          </div>
        )}

        <button
          type="submit"
          className="login-button"
          disabled={loading}
          style={{
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? <Loading /> : "Qeydiyyat"}
        </button>
      </form>
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
  );
}

export default RegisterInput;
