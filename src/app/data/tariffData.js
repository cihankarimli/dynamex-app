const tariffData = {
  Türkiye: {
    branch: [
      {
        weight: "0.1-0.25 kq-a qədər",
        standard: "2.00$ | 3.40 AZN",
        cosmetic: "2.00$ | 3.40 AZN",
      },
      {
        weight: "0.25-0.500 kq-a qədər",
        standard: "3.00$ | 5.10 AZN",
        cosmetic: "3.00$ | 5.10 AZN",
      },
      {
        weight: "0.50-0.75 kq-a qədər",
        standard: "3.50$ | 5.95 AZN",
        cosmetic: "3.50$ | 5.95 AZN",
      },
      {
        weight: "0.75-1 kq-a qədər",
        standard: "3.90$ | 6.63 AZN",
        cosmetic: "3.90$ | 6.63 AZN",
      },
      {
        weight: "1-1.5 kq-a qədər",
        standard: "4.50$ | 7.65 AZN",
        cosmetic: "4.50$ | 7.65 AZN",
      },
      {
        weight: "1.5-2 kq-a qədər",
        standard: "5.20$ | 8.84 AZN",
        cosmetic: "5.20$ | 8.84 AZN",
      },
      {
        weight: "2-2.5 kq-a qədər",
        standard: "5.80$ | 9.86 AZN",
        cosmetic: "5.80$ | 9.86 AZN",
      },
    ],
    home: [
      {
        weight: "0.1-0.25 kq-a qədər",
        standard: "3.50$ | 5.95 AZN",
        cosmetic: "3.50$ | 5.95 AZN",
      },
      {
        weight: "0.25-0.500 kq-a qədər",
        standard: "4.50$ | 7.65 AZN",
        cosmetic: "4.50$ | 7.65 AZN",
      },
      {
        weight: "0.50-0.75 kq-a qədər",
        standard: "5.00$ | 8.50 AZN",
        cosmetic: "5.00$ | 8.50 AZN",
      },
      {
        weight: "0.75-1 kq-a qədər",
        standard: "5.40$ | 9.18 AZN",
        cosmetic: "5.40$ | 9.18 AZN",
      },
      {
        weight: "1-1.5 kq-a qədər",
        standard: "6.00$ | 10.20 AZN",
        cosmetic: "6.00$ | 10.20 AZN",
      },
      {
        weight: "1.5-2 kq-a qədər",
        standard: "6.70$ | 11.39 AZN",
        cosmetic: "6.70$ | 11.39 AZN",
      },
    ],
  },
  Çin: {
    branch: [
      {
        weight: "0.1-0.25 kq-a qədər",
        standard: "1.80$ | 3.06 AZN",
        cosmetic: "1.80$ | 3.06 AZN",
      },
      {
        weight: "0.25-0.500 kq-a qədər",
        standard: "2.70$ | 4.59 AZN",
        cosmetic: "2.70$ | 4.59 AZN",
      },
      {
        weight: "0.50-0.75 kq-a qədər",
        standard: "3.20$ | 5.44 AZN",
        cosmetic: "3.20$ | 5.44 AZN",
      },
    ],
    home: [
      {
        weight: "0.1-0.25 kq-a qədər",
        standard: "3.30$ | 5.61 AZN",
        cosmetic: "3.30$ | 5.61 AZN",
      },
      {
        weight: "0.25-0.500 kq-a qədər",
        standard: "4.20$ | 7.14 AZN",
        cosmetic: "4.20$ | 7.14 AZN",
      },
      {
        weight: "0.50-0.75 kq-a qədər",
        standard: "4.70$ | 7.99 AZN",
        cosmetic: "4.70$ | 7.99 AZN",
      },
      {
        weight: "0.75-1 kq-a qədər",
        standard: "5.10$ | 8.67 AZN",
        cosmetic: "5.10$ | 8.67 AZN",
      },
      {
        weight: "1-1.5 kq-a qədər",
        standard: "5.70$ | 9.69 AZN",
        cosmetic: "5.70$ | 9.69 AZN",
      },
      {
        weight: "1.5-2 kq-a qədər",
        standard: "6.40$ | 10.88 AZN",
        cosmetic: "6.40$ | 10.88 AZN",
      },
      {
        weight: "2-2.5 kq-a qədər",
        standard: "7.00$ | 11.90 AZN",
        cosmetic: "7.00$ | 11.90 AZN",
      },
      {
        weight: "2.5-3 kq-a qədər",
        standard: "7.60$ | 12.92 AZN",
        cosmetic: "7.60$ | 12.92 AZN",
      },
      {
        weight: "3-3.5 kq-a qədər",
        standard: "8.20$ | 13.94 AZN",
        cosmetic: "8.20$ | 13.94 AZN",
      },
      {
        weight: "3.5-4 kq-a qədər",
        standard: "8.80$ | 14.96 AZN",
        cosmetic: "8.80$ | 14.96 AZN",
      },
      {
        weight: "4-4.5 kq-a qədər",
        standard: "9.40$ | 15.98 AZN",
        cosmetic: "9.40$ | 15.98 AZN",
      },
      {
        weight: "4.5-5 kq-a qədər",
        standard: "10.00$ | 17.00 AZN",
        cosmetic: "10.00$ | 17.00 AZN",
      },
      {
        weight: "5 kq-dan yuxarı (hər kq üçün)",
        standard: "2.10$ | 3.57 AZN",
        cosmetic: "2.10$ | 3.57 AZN",
      },
    ],
  },
  ABŞ: {
    branch: [
      {
        weight: "0.1-0.25 kq-a qədər",
        standard: "2.50$ | 4.25 AZN",
        cosmetic: "2.50$ | 4.25 AZN",
      },
      {
        weight: "0.25-0.500 kq-a qədər",
        standard: "3.40$ | 5.78 AZN",
        cosmetic: "3.40$ | 5.78 AZN",
      },
      {
        weight: "0.50-0.75 kq-a qədər",
        standard: "3.90$ | 6.63 AZN",
        cosmetic: "3.90$ | 6.63 AZN",
      },
      {
        weight: "0.75-1 kq-a qədər",
        standard: "4.30$ | 7.31 AZN",
        cosmetic: "4.30$ | 7.31 AZN",
      },
    ],
    home: [
      {
        weight: "0.1-0.25 kq-a qədər",
        standard: "4.00$ | 6.80 AZN",
        cosmetic: "4.00$ | 6.80 AZN",
      },
      {
        weight: "0.25-0.500 kq-a qədər",
        standard: "4.90$ | 8.33 AZN",
        cosmetic: "4.90$ | 8.33 AZN",
      },
      {
        weight: "0.50-0.75 kq-a qədər",
        standard: "5.40$ | 9.18 AZN",
        cosmetic: "5.40$ | 9.18 AZN",
      },
      {
        weight: "0.75-1 kq-a qədər",
        standard: "5.80$ | 9.86 AZN",
        cosmetic: "5.80$ | 9.86 AZN",
      },
      {
        weight: "1-1.5 kq-a qədər",
        standard: "6.40$ | 10.88 AZN",
        cosmetic: "6.40$ | 10.88 AZN",
      },
      {
        weight: "1.5-2 kq-a qədər",
        standard: "7.10$ | 12.07 AZN",
        cosmetic: "7.10$ | 12.07 AZN",
      },
      {
        weight: "2-2.5 kq-a qədər",
        standard: "7.70$ | 13.09 AZN",
        cosmetic: "7.70$ | 13.09 AZN",
      },
      {
        weight: "2.5-3 kq-a qədər",
        standard: "8.30$ | 14.11 AZN",
        cosmetic: "8.30$ | 14.11 AZN",
      },
      {
        weight: "3-3.5 kq-a qədər",
        standard: "8.90$ | 15.13 AZN",
        cosmetic: "8.90$ | 15.13 AZN",
      },
      {
        weight: "3.5-4 kq-a qədər",
        standard: "9.50$ | 16.15 AZN",
        cosmetic: "9.50$ | 16.15 AZN",
      },
      {
        weight: "4-4.5 kq-a qədər",
        standard: "10.10$ | 17.17 AZN",
        cosmetic: "10.10$ | 17.17 AZN",
      },
      {
        weight: "4.5-5 kq-a qədər",
        standard: "10.70$ | 18.19 AZN",
        cosmetic: "10.70$ | 18.19 AZN",
      },
      {
        weight: "5 kq-dan yuxarı (hər kq üçün)",
        standard: "2.40$ | 4.08 AZN",
        cosmetic: "2.40$ | 4.08 AZN",
      },
    ],
  },
};

export default tariffData;
