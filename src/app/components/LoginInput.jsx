"use client"; // Bu sətr komponenti client-side edir

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "../../service/auth";
import LoginData from "../data/LoginData";
import { FormInput } from "./FormInput";

function LoginInput() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  // Form göndərilməsi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("🔐 Login cəhdi:", formData);

      // API çağırışı
      const response = await AuthService.login(formData);

      console.log("✅ Login uğurlu:", response);

      // Token-i saxla
      if (response.token) {
        AuthService.setToken(response.token);

        // İstəgə bağlı: İstifadəçi məlumatları localStorage-də saxla
        if (rememberMe && response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        // Ana səhifəyə yönləndir
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("❌ Login xətası:", error);

      // Xəta mesajını göstər
      if (error.message) {
        setError(error.message);
      } else {
        setError("Giriş zamanı xəta baş verdi. Yenidən cəhd edin.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="form-input" onSubmit={handleSubmit}>
        {/* Xəta mesajı göstər */}
        {error && (
          <div
            className="error-message"
            style={{
              color: "red",
              marginBottom: "1rem",
              padding: "0.5rem",
              border: "1px solid red",
              borderRadius: "4px",
              backgroundColor: "#ffe6e6",
            }}
          >
            {error}
          </div>
        )}

        {/* Form inputları */}
        {LoginData.map((item) => (
          <FormInput
            key={item.id}
            item={item}
            value={formData[item.name] || ""}
            onChange={handleInputChange}
          />
        ))}

        {/* Məni xatırla checkbox */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember">Məni xatırla</label>
        </div>

        {/* Submit button */}
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Gözləyin..." : "Daxil Ol"}
        </button>
      </form>
    </div>
  );
}

export default LoginInput;
