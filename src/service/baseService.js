const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

class ApiService {
  static async request(endpoint, method = "GET", body = null) {
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || `HTTP error! status: ${response.status}`
        );
      }

      // Backend həm success: true həm data qaytarır
      return result;
    } catch (error) {
      console.error(`API xətası [${method} ${endpoint}]:`, error);
      throw error;
    }
  }

  static get(endpoint) {
    return this.request(endpoint, "GET");
  }

  static post(endpoint, data) {
    return this.request(endpoint, "POST", data);
  }

  static put(endpoint, data) {
    return this.request(endpoint, "PUT", data);
  }

  static delete(endpoint) {
    return this.request(endpoint, "DELETE");
  }
}

export default ApiService;
