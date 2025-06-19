const loginData = [
  {
    id: 1,
    type: "email",
    name: "login-input",
    label: "Email",
    placeHolder: "Email",
    name: "email",
    required: false, // boolean
    pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+", // string format
    message: "Düzgün email daxil edin",
  },
  {
    id: 2,
    type: "password",
    name: "login-input",
    label: "Parol",
    placeHolder: "Şifrə",
    name: "password",
    required: false,
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", // string format
    message: "Parol ən azı 8 simvol, bir hərf və bir rəqəm olmalıdır",
  },
];

export default loginData;
