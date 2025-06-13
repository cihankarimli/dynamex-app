const loginData = [
  {
    id: 1,
    label: "Email",
    placeHolder: "Emaili düzgün daxil edin",
    name: "email",
    required: "Email mütləqdir",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Düzgün email daxil edin",
    },
  },
  {
    id: 2,
    label: "Parol",
    placeHolder: "Şifrəni düzgün daxil edin",
    name: "password",
    required: "Parol mütləqdir",
  },
];

export default loginData;
