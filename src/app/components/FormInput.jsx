import React from "react";
import { ValidationError } from "../hooks/ValidationError";

function FormInput({ item }) {
  return (
    <>
      <label htmlFor={item.id}>{item.label}</label>
      <input
        type={item.type}
        id={item.id}
        placeholder={item.placeHolder}
        name={item.name}
        required={item.required}
        pattern={item.pattern}
      />
      <ValidationError item={item} />
    </>
  );
}

export { FormInput };
