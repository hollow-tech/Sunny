import {
  Commission,
  CommissionCurrency,
  CommissionType,
  Currency,
  ApplicationDate,
  ClosingDate,
  Status,
  ID,
  WithdrawalTable,
  WithdrawalTalbeBody,
  WithdrawalTalbeHead,
  WithdrawalTalbeRow,
  SortIcon,
  TXID,
  Sum,
} from "./Withdrawal.styles";

import { useSorting } from "../../../hooks/useSorting";

import { dataMock } from "./Withdrawal.data";

import { WithdrawalProps } from "./Withdrawal.types";
import { useTranslation } from "next-i18next";
import { TableWrapperScroll } from "../../../components";

export const Withdrawal: React.FC<WithdrawalProps> = () => {
  const { data, handleSorting } = useSorting(dataMock);
  const { t } = useTranslation("History");
  return (
    <TableWrapperScroll>
      <WithdrawalTable>
        <WithdrawalTalbeHead>
          <ID onClick={() => handleSorting("id")} as="button" color="#fff" variants="subtitle2">
            ID
            <SortIcon />
          </ID>
          <TXID color="#fff" variants="subtitle2">
            TXID
          </TXID>

          <ApplicationDate onClick={() => handleSorting("date")} as="button" color="#fff" variants="subtitle2">
            {t("WithdrawalTitleApplicationDate")}
            <SortIcon />
          </ApplicationDate>

          <ClosingDate onClick={() => handleSorting("date")} as="button" color="#fff" variants="subtitle2">
            {t("WithdrawalTitleClosingDate")}
            <SortIcon />
          </ClosingDate>

          <Sum as="button" onClick={() => handleSorting("sum")} color="#fff" variants="subtitle2">
            {t("WithdrawalTitleSum")}
            <SortIcon />
          </Sum>

          <Currency onClick={() => handleSorting("currency")} as="button" color="#fff" variants="subtitle2">
            {t("WithdrawalTitleCurrency")}
            <SortIcon />
          </Currency>

          <Commission color="#fff" variants="subtitle2">
            {t("WithdrawalTitleCommission")}
          </Commission>

          <CommissionCurrency color="#fff" variants="subtitle2">
            {t("WithdrawalTitleCommissionCurrency")}
          </CommissionCurrency>

          <CommissionType color="#fff" variants="subtitle2">
            {t("WithdrawalTitleCommissionType")}
          </CommissionType>

          <Status onClick={() => handleSorting("status")} as="button" color="#fff" variants="subtitle2">
            {t("WithdrawalTitleStatus")}
            <SortIcon />
          </Status>
        </WithdrawalTalbeHead>
        <WithdrawalTalbeBody>
          {data.map(
            ({
              id,
              txid,
              applicationDate,
              closingDate,
              sum,
              currency,
              commission,
              commissionCurrency,
              commissionType,
              status,
            }) => (
              <WithdrawalTalbeRow key={id}>
                <ID color="#313131" variants="subtitle2">
                  {id}
                  <SortIcon />
                </ID>
                <TXID color="#313131" variants="subtitle2">
                  {txid}
                </TXID>

                <ApplicationDate color="#313131" variants="subtitle2">
                  {applicationDate}
                  <SortIcon />
                </ApplicationDate>

                <ClosingDate color="#313131" variants="subtitle2">
                  {closingDate}
                  <SortIcon />
                </ClosingDate>

                <Sum color="#F44336" variants="subtitle2">
                  {sum}
                  <SortIcon />
                </Sum>

                <Currency color="#2D62EA " variants="subtitle2">
                  {currency}
                  <SortIcon />
                </Currency>

                <Commission color="#313131" variants="subtitle2">
                  {commission}
                </Commission>

                <CommissionCurrency color="#2D62EA" variants="subtitle2">
                  {commissionCurrency}
                </CommissionCurrency>

                <CommissionType color="#313131" variants="subtitle2">
                  {commissionType}
                </CommissionType>

                <Status color="#313131" variants="subtitle2">
                  {status}
                  <SortIcon />
                </Status>
              </WithdrawalTalbeRow>
            )
          )}
        </WithdrawalTalbeBody>
      </WithdrawalTable>
    </TableWrapperScroll>
  );
};
