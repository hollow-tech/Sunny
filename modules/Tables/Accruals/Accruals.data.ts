interface Accrual {
  id: string;
  date: string;
  depositID: string;
  quantity: string;
}

export const dataMock: Accrual[] = [
  {
    id: "12345664",
    date: "07.07.2021",
    depositID: "07.07.2021",
    quantity: "61",
  },

  {
    id: "12345663",
    date: "29.06.2021",
    depositID: "29.06.2021",
    quantity: "45",
  },
  {
    id: "12345662",
    date: "15.06.2021",
    depositID: "15.06.2021",
    quantity: "52 ",
  },
  {
    id: "12345661",
    date: "15.06.2021",
    depositID: "15.06.2021",
    quantity: "45  ",
  },
  {
    id: "12345621",
    date: "15.06.2021",
    depositID: "15.06.2021",
    quantity: "13",
  },
];
