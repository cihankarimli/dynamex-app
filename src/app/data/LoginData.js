const loginData = [
  {
    id: 1,
    type: "email",
    label: "Email",
    placeHolder: "Email",
    name: "email",
    required: true, // boolean
    pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+", // string format
    message: "Düzgün email daxil edin",
  },
  {
    id: 2,
    type: "password",
    label: "Parol",
    placeHolder: "Şifrə",
    name: "password",
    required: true,
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", // string format
    message: "Parol ən azı 8 simvol, bir hərf və bir rəqəm olmalıdır",
  },
];

export default loginData;
