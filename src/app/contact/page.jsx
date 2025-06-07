"use client";
import React, { useState } from "react";
import contactData from "../data/ContactData";
import style from "../styles/ContactPage.css";

function page() {
  const [selectedCity, setSelectedCity] = useState(contactData[0]);

  const handleCityChange = (e) => {
    const cityId = parseInt(e.target.value);
    const selected = contactData.find((item) => item.id === cityId);
    setSelectedCity(selected);
  };

  return (
    <div>
      <div className="contact-container">
        <div className="title">
          <h1 className="head-line">Əlaqə</h1>
          <p className="left-middle">
            Bizlə heç çəkinmədən əlaqə saxlayın, daim xidmətinizdəyik!
          </p>
          <div className="contact-section">
            <div className="contact-select">
              <h3>Əlaqə melumatlari</h3>
              <select
                name=""
                id=""
                onChange={handleCityChange}
                defaultValue={contactData[0].id}
              >
                {contactData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.city}
                  </option>
                ))}
              </select>
            </div>
            <div className="info">
              {selectedCity && (
                <div className="city-details">
                  <div className="detail-item">
                    <strong>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.2"
                        height="16"
                        viewBox="0 0 11.2 16"
                      >
                        <path
                          id="prefix__map-marker-outline"
                          d="M10.6 5.6a2 2 0 1 1-2 2 2 2 0 0 1 2-2m0-3.6a5.6 5.6 0 0 1 5.6 5.6c0 4.2-5.6 10.4-5.6 10.4S5 11.8 5 7.6A5.6 5.6 0 0 1 10.6 2m0 1.6a4 4 0 0 0-4 4c0 .8 0 2.4 4 7.768 4-5.368 4-6.968 4-7.768a4 4 0 0 0-4-4z"
                          transform="translate(-5 -2)"
                          style={{ fill: "#15b2ec33" }}
                        ></path>
                      </svg>
                    </strong>
                    <p>{selectedCity.address}</p>
                  </div>
                  <div className="detail-item">
                    <strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          id="prefix__phone"
                          d="M6.218 9.924a13.419 13.419 0 0 0 5.858 5.858l1.956-1.956a.892.892 0 0 1 .907-.222 10.1 10.1 0 0 0 3.173.507A.889.889 0 0 1 19 15v3.111a.889.889 0 0 1-.889.889A15.111 15.111 0 0 1 3 3.889.889.889 0 0 1 3.889 3H7a.889.889 0 0 1 .889.889A10.1 10.1 0 0 0 8.4 7.062a.892.892 0 0 1-.222.907z"
                          transform="translate(-3 -3)"
                          style={{ fill: "rgba(245, 164, 22, 0.2)" }}
                        ></path>
                      </svg>
                    </strong>
                    <p>{selectedCity.phone}</p>
                  </div>
                  <div className="detail-item">
                    <strong>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12.8"
                        viewBox="0 0 16 12.8"
                      >
                        <path
                          id="prefix__email-outline"
                          d="M3.6 4h12.8A1.6 1.6 0 0 1 18 5.6v9.6a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 15.2V5.6A1.594 1.594 0 0 1 3.6 4M10 9.6l6.4-4H3.6l6.4 4m-6.4 5.6h12.8V7.5L10 11.488 3.6 7.5z"
                          transform="translate(-2 -4)"
                          style={{ fill: "#00C99C23" }}
                        ></path>
                      </svg>
                    </strong>
                    <p>{selectedCity.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
