import Image from "next/image";
import RegisterData from "../data/registerData";
import { FormInput } from "./FormInput";
function RegisterForm() {
  return (
    <div className="login-container">
      <form className="form-input" action="/login" method="POST">
        {RegisterData.map((item) => (
          <FormInput key={item.id} item={item} />
        ))}

        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Məni xatırla</label>
        </div>

        <button type="submit" className="login-button">
          Qeydiyyatdan keç
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
