interface Replenishment {
  id: string;
  txid: string;
  date: string;
  sum: string;
  currency: string;
  commission: string;
  commissionCurrency: string;
  commissionType: string;
}

export const dataMock: Replenishment[] = [
  {
    id: "12345661",
    txid: "https://tronscan.org/?//#/transaction/...",
    date: "07.07.2021",
    sum: "12",
    currency: "USDT",
    commission: "0.4",
    commissionCurrency: "USDT ",
    commissionType: "0.345 USDT ",
  },

  {
    id: "12345662",
    txid: "https://tronscan.org/?//#/transaction/...",
    date: "29.06.2021",
    sum: "13",
    currency: "SWH",
    commission: "6",
    commissionCurrency: "SWH ",
    commissionType: "0.345 SWH",
  },

  {
    id: "12345663",
    txid: "https://tronscan.org/?//#/transaction/...",
    date: "15.06.2021",
    sum: "14",
    currency: "USDT ",
    commission: "7",
    commissionCurrency: "USDT",
    commissionType: "0.345 %",
  },

  {
    id: "12345664",
    txid: "https://tronscan.org/?//#/transaction/...",
    date: "15.05.2021",
    sum: "15",
    currency: "USDT ",
    commission: "7",
    commissionCurrency: "USDT",
    commissionType: "0.345 %",
  },
];
