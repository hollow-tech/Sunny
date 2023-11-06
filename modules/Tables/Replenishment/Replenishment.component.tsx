import {
  Commission,
  CommissionCurrency,
  CommissionType,
  Currency,
  Date,
  ID,
  ReplenishmentTable,
  ReplenishmentTalbeBody,
  ReplenishmentTalbeHead,
  ReplenishmentTalbeRow,
  SortIcon,
  TXID,
  Sum,
} from "./Replenishment.styles";

import { useSorting } from "../../../hooks/useSorting";

import { dataMock } from "./Replenishment.data";

import { TableWrapperScroll } from "../../../components";

import { ReplenishmentProps } from "./Replenishment.types";
import { useTranslation } from "next-i18next";
export const Replenishment: React.FC<ReplenishmentProps> = () => {
  const { data, handleSorting } = useSorting(dataMock);
  const { t } = useTranslation("History");
  return (
    <TableWrapperScroll>
      <ReplenishmentTable>
        <ReplenishmentTalbeHead>
          <ID onClick={() => handleSorting("id")} as="button" color="#fff" variants="subtitle2">
            ID
            <SortIcon />
          </ID>
          <TXID color="#fff" variants="subtitle2">
            TXID
          </TXID>
          <Date onClick={() => handleSorting("date")} as="button" color="#fff" variants="subtitle2">
            {t("ReplenishmentTitleDate")}
            <SortIcon />
          </Date>
          <Sum as="button" onClick={() => handleSorting("sum")} color="#fff" variants="subtitle2">
            {t("ReplenishmentTitleSum")}
            <SortIcon />
          </Sum>

          <Currency onClick={() => handleSorting("currency")} as="button" color="#fff" variants="subtitle2">
            {t("ReplenishmentTitleCurrency")}
            <SortIcon />
          </Currency>

          <Commission color="#fff" variants="subtitle2">
            {t("ReplenishmentTitleCommission")}
          </Commission>

          <CommissionCurrency color="#fff" variants="subtitle2">
            {t("ReplenishmentTitleCommissionCurrency")}
          </CommissionCurrency>

          <CommissionType color="#fff" variants="subtitle2">
            {t("ReplenishmentTitleCommissionType")}
          </CommissionType>
        </ReplenishmentTalbeHead>
        <ReplenishmentTalbeBody>
          {data.map(({ id, txid, date, sum, currency, commission, commissionCurrency, commissionType }) => (
            <ReplenishmentTalbeRow key={id}>
              <ID as="div" color="#313131" variants="subtitle2">
                {id}
              </ID>
              <TXID as="div" color="#313131" variants="subtitle2">
                {txid}
              </TXID>
              <Date as="div" color="#313131" variants="subtitle2">
                {date}
              </Date>
              <Sum as="div" color="#52A90D" variants="subtitle2">
                {sum}
              </Sum>

              <Currency as="div" color="#2D62EA" variants="subtitle2">
                {currency}
              </Currency>

              <Commission as="div" color="#313131" variants="subtitle2">
                {commission}
              </Commission>

              <CommissionCurrency as="div" color="#2D62EA" variants="subtitle2">
                {commissionCurrency}
              </CommissionCurrency>

              <CommissionType as="div" color="#313131" variants="subtitle2">
                {commissionType}
              </CommissionType>
            </ReplenishmentTalbeRow>
          ))}
        </ReplenishmentTalbeBody>
      </ReplenishmentTable>
    </TableWrapperScroll>
  );
};
