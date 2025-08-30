import React from "react";
import ServicesCard from "../components/ServicesCard";
import "../styles/ServicesPage.css";
import { fetchServices } from "../../fetch/services";

export default async function page() {
  let servicesData = [];
  try {
    servicesData = await fetchServices();
  } catch (err) {
    console.error("Xidmət məlumatını yükləyərkən xəta:", err);
  }
  console.log(servicesData);
  return (
    <>
      <div className="head-line">
        <h1>Xidmətlər</h1>
        <p>
          Təklif etdiyimiz xidmətlərdən yararlanaraq onlayn sifariş etməyə
          tələsin!
        </p>
      </div>
      <ServicesCard servicesData={servicesData} />
    </>
  );
}
