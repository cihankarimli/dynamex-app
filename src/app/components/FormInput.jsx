function FormInput({ item }) {
  return (
    <>
      <div key={item.id} className="input-container">
        <label>{item.label}</label>
        <input
          type={item.type}
          id={item.id}
          placeholder={item.placeHolder}
          name={item.name}
          required={item.required ? true : false}
          pattern={item.pattern}
          title={item.message}
        />
        <small className="error-message">{item.message}</small>
      </div>
    </>
  );
}

export default FormInput;
