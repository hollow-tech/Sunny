import {
  Balance,
  CommissionType,
  DateEnd,
  TransactionFee,
  TransactionType,
  StatisticTable,
  StatisticTalbeBody,
  StatisticTalbeHead,
  StatisticTalbeRow,
  TXID,
  ID,
  CurrencyColor,
} from "./Statistic.styles";
import { useTranslation } from "next-i18next";
import { dataMock } from "./Statistic.data";

import { StatisticProps } from "./Statistic.types";
import { TableWrapperScroll } from "../../../components";

export const Statistic: React.FC<StatisticProps> = () => {
  const { t } = useTranslation("Statistics");
  return (
    <TableWrapperScroll>
      <StatisticTable>
        <StatisticTalbeHead>
          <DateEnd as="div" color="#fff" variants="subtitle2">
            {t("StatisticTitleDateEnd")}
          </DateEnd>

          <ID as="div" color="#fff" variants="subtitle2">
            ID
          </ID>

          <TXID as="div" color="#fff" variants="subtitle2">
            TXID
          </TXID>

          <Balance as="div" color="#fff" variants="subtitle2">
            {t("StatisticTitleBalance")}
          </Balance>

          <TransactionFee as="div" color="#fff" variants="subtitle2">
            {t("StatisticTitleTransactionFee")}
          </TransactionFee>

          <CommissionType as="div" color="#fff" variants="subtitle2">
            {t("StatisticTitleCommissionType")}
          </CommissionType>

          <TransactionType as="div" color="#fff" variants="subtitle2">
            {t("StatisticTitleTransactionType")}
          </TransactionType>
        </StatisticTalbeHead>
        <StatisticTalbeBody>
          {dataMock.map(({ dateEnd, id, txid, balance, transactionFee, commissionType, transactionType }) => (
            <StatisticTalbeRow key={id}>
              <DateEnd as="div" color="#313131" variants="subtitle2">
                {dateEnd}
              </DateEnd>

              <ID as="div" color="#313131" variants="subtitle2">
                {id}
              </ID>

              <TXID color="#313131" variants="subtitle2">
                {txid}
              </TXID>

              <Balance bgColor="#F44336" color="#F44336" variants="subtitle2">
                {balance}
              </Balance>

              <TransactionFee as="div" color="#313131" variants="subtitle2">
                {transactionFee}
                <CurrencyColor color="#FFE816">&nbsp;SWH</CurrencyColor>
              </TransactionFee>

              <CommissionType as="div" color="#313131" variants="subtitle2">
                {commissionType}
                <CurrencyColor color="#FFE816">&nbsp;SWH</CurrencyColor>
              </CommissionType>

              <TransactionType color="#313131" variants="subtitle2">
                {transactionType}
              </TransactionType>
            </StatisticTalbeRow>
          ))}
        </StatisticTalbeBody>
      </StatisticTable>
    </TableWrapperScroll>
  );
};
