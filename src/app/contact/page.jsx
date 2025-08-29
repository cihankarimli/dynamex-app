import ContactSelect from "../components/contactPage/ContactSelect";
import { fetchContacts } from "../../fetch/contacts";
import "../styles/ContactPage.css";

export default async function Page() {
  let contactData = [];
  let error = null;

  try {
    contactData = await fetchContacts();
  } catch (err) {
    error = err.message;
  }

  return (
    <div className="contact-container">
      <h1 className="head-line">Əlaqə</h1>
      <p className="left-middle">
        Bizlə heç çəkinmədən əlaqə saxlayın, daim xidmətinizdəyik!
      </p>

      {error ? (
        <div>
          <p>Xəta baş verdi: {error}</p>
          <button onClick={() => window.location.reload()}>
            Yenidən cəhd et
          </button>
        </div>
      ) : (
        <div className="contact-section">
          <ContactSelect contactData={contactData} />
        </div>
      )}
    </div>
  );
}
