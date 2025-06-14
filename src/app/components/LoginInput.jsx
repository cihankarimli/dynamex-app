"use client";
import { useForm } from "react-hook-form";
import LoginData from "../data/LoginData";

function LoginInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {LoginData.map((item) => (
            <div className="input-container" key={item.id}>
              <label htmlFor={item.name}>{item.label}</label>
              <input
                type={item.type}
                id={item.name}
                style={{
                  backgroundColor:
                    touchedFields[item.name] && !errors[item.name]
                      ? "#E8F0FE"
                      : "white",
                  borderColor: errors[item.name] ? "red" : "black",
                }}
                placeholder={item.placeHolder}
                {...register(item.name, {
                  required: item.required || false,
                  pattern: item.pattern || undefined,
                })}
              />
              {errors[item.name] && (
                <span className="error-message">
                  {errors[item.name].message}
                </span>
              )}
            </div>
          ))}

          <button type="submit" className="login-button">
            Daxil Ol
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginInput;
