"use client";
import { useState, useEffect } from "react";
import AuthService from "../../service/auth";
import Loading from "../hooks/LoadingPage";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      // localStorage-dən istifadəçi məlumatlarını al
      const userData = AuthService.getUser();
      if (!userData) {
        window.location.href = "/login";
        return;
      }

      setUser(userData);

      setLoading(false);
    };

    loadUser();
  }, []);

  const handleLogout = () => {
    AuthService.logout();
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Loading />
        <p style={{ marginTop: "20px", color: "#666" }}>Yüklənir...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          padding: "20px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "15px",
          color: "white",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <h1 style={{ margin: "0 0 8px 0", fontSize: "28px" }}>
            Salam, {user.username}! 👋
          </h1>
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "12px 24px",
            background: "rgba(255,255,255,0.2)",
            color: "white",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "rgba(255,255,255,0.2)";
          }}
        >
          Çıxış Et
        </button>
      </div>

      {/* User Info Card */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            color: "#333",
            fontSize: "24px",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "10px",
          }}
        >
          👤 Profil Məlumatları
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              background: "#f8f9fa",
              borderRadius: "10px",
              border: "1px solid #e9ecef",
            }}
          >
            <span
              style={{
                color: "#6c757d",
                fontWeight: "600",
                minWidth: "120px",
              }}
            >
              İstifadəçi adı:
            </span>
            <span style={{ color: "#333", fontWeight: "500" }}>
              @{user.username}
            </span>
          </div>

          {user.email && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                background: "#f8f9fa",
                borderRadius: "10px",
                border: "1px solid #e9ecef",
              }}
            >
              <span
                style={{
                  color: "#6c757d",
                  fontWeight: "600",
                  minWidth: "120px",
                }}
              >
                Email:
              </span>
              <span style={{ color: "#333", fontWeight: "500" }}>
                {user.email}
              </span>
            </div>
          )}

          {user.phone && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                background: "#f8f9fa",
                borderRadius: "10px",
                border: "1px solid #e9ecef",
              }}
            >
              <span
                style={{
                  color: "#6c757d",
                  fontWeight: "600",
                  minWidth: "120px",
                }}
              >
                Telefon:
              </span>
              <span style={{ color: "#333", fontWeight: "500" }}>
                {user.phone}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Welcome Message */}
      <div
        style={{
          background: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", fontSize: "20px" }}>
          🎉 Xoş gəldin Dynamex-ə!
        </h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Artıq dashboard-dakı bütün funksiyalardan istifadə edə bilərsən.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
