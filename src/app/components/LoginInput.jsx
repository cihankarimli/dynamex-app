import LoginData from "../data/LoginData";
import { FormInput } from "./FormInput";
function LoginForm() {
  return (
    <div className="login-container">
      <form className="form-input" action="/login" method="POST">
        {LoginData.map((item) => (
          <FormInput key={item.id} item={item} />
        ))}

        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Məni xatırla</label>
        </div>

        <button type="submit" className="login-button">
          Daxil Ol
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
