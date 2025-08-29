import ContactService from "../services/contactService";

// əgər artıq ContactService varsa

// Bu funksiya endpoint kimi davranacaq
export async function fetchContacts() {
  try {
    const contacts = await ContactService.getAllContacts();
    return contacts;
  } catch (error) {
    console.error("Kontaktları yükləyərkən xəta:", error);
    throw error;
  }
}
