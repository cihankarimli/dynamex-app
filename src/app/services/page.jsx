import React from "react";
import ServicesCard from "../components/ServicesCard";

function page() {
  return (
    <>
      <div className="head-line">
        <h1>Xidmətlər</h1>
        <p>
          Təklif etdiyimiz xidmətlərdən yararlanaraq onlayn sifariş etməyə
          tələsin!
        </p>
      </div>
      <ServicesCard />
    </>
  );
}

export default page;
