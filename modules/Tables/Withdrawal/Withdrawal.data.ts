interface Withdrawal {
  id: string;
  txid: string;
  applicationDate: string;
  closingDate: string;
  sum: string;
  currency: string;
  commission: string;
  commissionCurrency: string;
  commissionType: string;
  status: string;
}

export const dataMock: Withdrawal[] = [
  {
    id: "12345661",
    txid: "https://tronscan.org/?//#/transaction/...",
    applicationDate: "07.07.2021",
    closingDate: "07.07.2021",
    sum: "12",
    currency: "USDT",
    commission: "0.4",
    commissionCurrency: "USDT ",
    commissionType: "0.345 USDT ",
    status: "Обрабатывается ",
  },
  {
    id: "12345662",
    txid: "https://tronscan.org/?//#/transaction/...",
    applicationDate: "07.07.2021",
    closingDate: "07.07.2021",
    sum: "12",
    currency: "USDT",
    commission: "0.4",
    commissionCurrency: "USDT ",
    commissionType: "0.345 USDT ",
    status: "Обрабатывается ",
  },

  {
    id: "12345663",
    txid: "https://tronscan.org/?//#/transaction/...",
    applicationDate: "07.07.2021",
    closingDate: "07.07.2021",
    sum: "12",
    currency: "USDT",
    commission: "0.4",
    commissionCurrency: "USDT ",
    commissionType: "0.345 USDT ",
    status: "Обрабатывается ",
  },

  {
    id: "12345664",
    txid: "https://tronscan.org/?//#/transaction/...",
    applicationDate: "07.07.2021",
    closingDate: "07.07.2021",
    sum: "12",
    currency: "USDT",
    commission: "0.4",
    commissionCurrency: "USDT ",
    commissionType: "0.345 USDT ",
    status: "Обрабатывается ",
  },
];
