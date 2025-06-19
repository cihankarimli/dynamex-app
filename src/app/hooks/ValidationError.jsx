"use client";
import React, { useState } from "react";

function ValidationError({ item }) {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!value) {
      setError(`${item.label}i daxil edin`);
    } else if (item.pattern && !new RegExp(item.pattern).test(value)) {
      setError(item.message);
    } else {
      setError("");
    }
  };

  if (typeof window !== "undefined") {
    const input = document.getElementById(item.id);
    if (input) {
      input.oninput = handleInputChange;
    }
  }

  return error ? <small style={{ color: "red" }}>{error}</small> : null;
}

export { ValidationError };
