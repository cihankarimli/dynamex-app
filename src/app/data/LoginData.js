const loginData = [
  {
    id: 1,
    type: "email",
    label: "Email",
    placeHolder: "Email",
    name: "email",
    required: "Email mütləqdir",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Düzgün email daxil edin",
    },
  },
  {
    id: 2,
    type: "password",
    label: "Parol",
    placeHolder: "Şifrə",
    name: "password",
    required: "Parol mütləqdir",
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Parol ən azı 8 simvol, bir hərf və bir rəqəm olmalıdır",
    },
  },
];

export default loginData;
