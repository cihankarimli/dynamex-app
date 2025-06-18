"use client";
import React, { useState } from "react";

// FormInput komponenti
function FormInput({ item }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(true);

  const isValid = (inputValue) => {
    if (item.pattern) {
      const regex = new RegExp(item.pattern);
      return regex.test(inputValue);
    }
    return true;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue !== "" && !isValid(inputValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="input-container">
      <label htmlFor={item.id}>{item.label}</label>
      <input
        type={item.type}
        id={item.id}
        placeholder={item.placeHolder}
        name={item.name}
        required={item.required}
        pattern={item.pattern}
        value={value}
        onChange={handleChange}
      />
      {error && <small className="error-message">{item.message}</small>}
    </div>
  );
}
export { FormInput };
