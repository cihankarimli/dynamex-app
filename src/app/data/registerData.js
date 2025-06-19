const registerData = [
  {
    id: 0,
    label: "İstifadəçi adı",
    type: "text",
    placeHolder: "İstifadəçi adınızı daxil edin",
    name: "username",
    required: true,
    pattern: "^[a-zA-Z0-9_]{3,}$", // At least 3 characters, alphanumeric and underscores
    message:
      "İstifadəçi adı ən azı 3 simvoldan ibarət olmalıdır və yalnız hərf, rəqəm və alt xəttdən ibarət ola bilər",
  },
  {
    id: 1,
    label: "Soyad",
    type: "text",
    placeHolder: "Soyadınızı daxil edin",
    name: "surname",
    required: true,
    pattern: "^[a-zA-Z]{2,}$", // At least 2 characters, only letters
    message:
      "Soyad ən azı 2 hərfdən ibarət olmalıdır və yalnız hərflərdən ibarət ola bilər",
  },
  {
    id: 2,
    label: "Email",
    type: "email",
    placeHolder: "Emailinizi daxil edin",
    name: "email",
    required: true,
    pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+", // Valid email format
    message: "Düzgün email daxil edin",
  },
  {
    id: 3,
    label: "Parol",
    type: "password",
    placeHolder: "Şifrənizi daxil edin",
    name: "password",
    required: true,
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", // At least 8 characters, one letter and one number
    message: "Parol ən azı 8 simvol, bir hərf və bir rəqəm olmalıdır",
  },
];
export default registerData;
