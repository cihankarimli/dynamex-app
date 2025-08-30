"use client";
import React, { useState, useEffect } from "react";
import ContactDetails from "./ContactDetails";
import Loading from "@/app/hooks/LoadingPage";

export default function ContactSelect({ contactData: initialData }) {
  const [contactData, setContactData] = useState(initialData || []);
  const [selectedCity, setSelectedCity] = useState(initialData?.[0] || null);
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      const fetchContacts = async () => {
        setLoading(true);
        try {
          const res = await fetch("/contacts");
          const contacts = await res.json();
          setContactData(contacts);
          setSelectedCity(contacts[0] || null);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchContacts();
    }
  }, [initialData]);

  if (loading) return <Loading />;

  if (!contactData || contactData.length === 0)
    return <p>Heç bir kontakt tapılmadı</p>;

  return (
    <div className="contact-select">
      <h3>Əlaqə məlumatları</h3>
      <select
        onChange={(e) => {
          const selected = contactData.find((c) => c._id === e.target.value);
          setSelectedCity(selected);
        }}
        defaultValue={contactData[0]._id}
      >
        {contactData.map((item) => (
          <option key={item._id} value={item._id}>
            {item.city}
          </option>
        ))}
      </select>

      {selectedCity && <ContactDetails city={selectedCity} />}
    </div>
  );
}
