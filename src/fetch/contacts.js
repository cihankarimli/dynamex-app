import BaseService from "../service/baseService";

// Bu funksiya endpoint kimi davranacaq
export async function fetchContacts() {
  try {
    const contacts = await BaseService.get("/contacts");
    return contacts;
  } catch (error) {
    console.error("Kontaktları yükləyərkən xəta:", error);
    throw error;
  }
}
