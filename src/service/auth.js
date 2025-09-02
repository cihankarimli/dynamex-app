import ApiService from "./baseService.js";

class AuthService {
  // Register
  static async register(userData) {
    return await ApiService.post("/auth/register", userData);
  }

  // Login
  static async login(userData) {
    try {
      console.log("📡 Login API çağırışı:", userData);
      const response = await ApiService.post("/auth/login", userData);

      console.log("📨 API cavabı:", response);

      // Uğurlu login-dən sonra token-i avtomatik saxla
      if (response.token) {
        AuthService.setToken(response.token); // ✅ this əvəzinə AuthService
        console.log("🎫 Token avtomatik saxlandı");

        // İstifadəçi məlumatları da varsa saxla
        if (response.user) {
          AuthService.setUser(response.user);
        }
      } else {
        console.warn("⚠️ API cavabında token tapılmadı");
      }

      return response;
    } catch (error) {
      console.error("❌ Login API xətası:", error);
      throw error;
    }
  }

  // Token management
  static setToken(token) {
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", token);
      console.log("✅ Token saxlandı:", token);
    }
  }

  static getToken() {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      console.log("🔍 Token alındı:", token ? "Mövcud" : "Yoxdur");
      return token;
    }
    return null;
  }

  static removeToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user"); // İstifadəçi məlumatları da sil
      console.log("🗑️ Token və istifadəçi məlumatları silindi");
    }
  }

  static isAuthenticated() {
    const token = AuthService.getToken();
    const isAuth = !!token;
    console.log("🔒 Authentication vəziyyəti:", isAuth);
    return isAuth;
  }

  // User management
  static setUser(userData) {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("✅ İstifadəçi məlumatları saxlandı:", userData);
    }
  }

  static getUser() {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;
      console.log("👤 İstifadəçi məlumatları:", user ? "Mövcud" : "Yoxdur");
      return user;
    }
    return null;
  }

  static getCurrentUser() {
    return AuthService.getUser(); // Duplikat metod, getUser() ilə eyni
  }

  // Logout
  static logout() {
    console.log("🚪 Logout prosesi başladı");
    AuthService.removeToken(); // this əvəzinə AuthService

    // Next.js router istifadə et (əgər mövcuddursa)
    if (typeof window !== "undefined") {
      console.log("↩️ Login səhifəsinə yönləndirilir");
      window.location.href = "/login";
    }
  }

  // Token validasiyası üçün əlavə metod
  static async validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      return false;
    }

    try {
      // API-dən token-in etibarlığını yoxla
      const response = await ApiService.get("/auth/validate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.valid === true;
    } catch (error) {
      console.error("❌ Token validasiya xətası:", error);
      // Token etibarsızdırsa sil
      AuthService.removeToken();
      return false;
    }
  }
}

export default AuthService;
