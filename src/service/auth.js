import ApiService from "./baseService.js";

class AuthService {
  // Register
  static async register(userData) {
    return await ApiService.post("/auth/register", userData);
  }

  // Login
  static async login(userData) {
    const response = await ApiService.post("/auth/login", userData);

    // Uğurlu login-dən sonra token-i avtomatik saxla
    if (response.token) {
      this.setToken(response.token);
    }

    return response;
  }

  // Token management
  static setToken(token) {
    if (typeof window !== "undefined") {
      localStorage.setItem("authToken", token);
      console.log("✅ Token saxlandı");
    }
  }

  static getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("authToken");
    }
    return null;
  }

  static removeToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user"); // İstifadəçi məlumatları da sil
      console.log("🗑️ Token silindi");
    }
  }

  static isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  // Get current user data from localStorage
  static getCurrentUser() {
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  }

  // Logout
  static logout() {
    this.removeToken();

    // Next.js router istifadə et (əgər mövcuddursa)
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  }
}

export default AuthService;
