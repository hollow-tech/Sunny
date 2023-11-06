interface ClosedOrders {
  id: string;
  createat: string;
  completionDate: string;
  price: string;
  purchased: string;
  notPurchased: string;
  spent: string;
  returned: string;
  status: string;
}

export const dataMock: ClosedOrders[] = [
  {
    id: "12345664",
    createat: "07.07.2021",
    completionDate: "07.07.2021",
    price: "0.345 USDT ",
    purchased: "2",
    notPurchased: "4",
    spent: "5",
    returned: "5",
    status: "Выполнен целиком",
  },
  {
    id: "12345663",
    createat: "29.06.2021",
    completionDate: "29.06.2021",
    price: "0.345 USDT ",
    purchased: "2",
    notPurchased: "5",
    spent: "7",
    returned: "10",
    status: "Отменен пользователем, не выполнен",
  },
  {
    id: "12345662",
    createat: "15.06.2021",
    completionDate: "15.06.2021",
    price: "0.345 USDT ",
    purchased: "3",
    notPurchased: "10",
    spent: "8",
    returned: "13",
    status: "Ошибка",
  },
];
