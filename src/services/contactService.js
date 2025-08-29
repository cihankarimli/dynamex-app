// services/contactService.js

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

class ContactService {
  // Bütün kontaktları al
  static async getAllContacts() {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.error || "Kontaktlar alınmadı");
      }
    } catch (error) {
      console.error("Kontaktları alarkən xəta:", error);
      throw error;
    }
  }

  // ID-yə görə kontakt al
  static async getContactById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.error || "Kontakt tapılmadı");
      }
    } catch (error) {
      console.error("Kontakt alarkən xəta:", error);
      throw error;
    }
  }

  // Şəhərə görə kontakt al
  static async getContactsByCity(city) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/contacts/city/${encodeURIComponent(city)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.error || "Kontaktlar tapılmadı");
      }
    } catch (error) {
      console.error("Şəhərə görə kontakt alarkən xəta:", error);
      throw error;
    }
  }

  // Yeni kontakt əlavə et (admin üçün)
  static async addContact(contactData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.error || "Kontakt əlavə edilmədi");
      }
    } catch (error) {
      console.error("Kontakt əlavə edərkən xəta:", error);
      throw error;
    }
  }

  // Kontakt yenilə (admin üçün)
  static async updateContact(id, contactData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.error || "Kontakt yenilənmədi");
      }
    } catch (error) {
      console.error("Kontakt yeniləyərkən xəta:", error);
      throw error;
    }
  }

  // Kontakt sil (admin üçün)
  static async deleteContact(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        return true;
      } else {
        throw new Error(result.error || "Kontakt silinmədi");
      }
    } catch (error) {
      console.error("Kontakt silərkən xəta:", error);
      throw error;
    }
  }
}

export default ContactService;
