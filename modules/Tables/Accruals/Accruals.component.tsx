import { useSorting } from "../../../hooks/useSorting";
import { dataMock } from "./Accruals.data";
import {
  AccrualsTable,
  AccrualsTalbeBody,
  AccrualsTalbeHead,
  AccrualsTalbeRow,
  Date,
  DepositID,
  ID,
  Quantity,
  SortIcon,
} from "./Accruals.styles";
import { AccrualsProps } from "./Accruals.types";
import { useTranslation } from "next-i18next";
import { TableWrapperScroll } from "../../../components";
export const Accruals: React.FC<AccrualsProps> = () => {
  const { t } = useTranslation("History");
  const { data, handleSorting } = useSorting(dataMock);
  return (
    <TableWrapperScroll>
      <AccrualsTable>
        <AccrualsTalbeHead>
          <ID onClick={() => handleSorting("id")} as="button" color="#fff" variants="subtitle2">
            ID
            <SortIcon />
          </ID>

          <Date onClick={() => handleSorting("date")} as="button" color="#fff" variants="subtitle2">
            {t("AccrualsTitleDate")}
            <SortIcon />
          </Date>

          <DepositID onClick={() => handleSorting("depositID")} as="button" color="#fff" variants="subtitle2">
            ID {t("AccrualsTitleDepositID")}
            <SortIcon />
          </DepositID>

          <Quantity onClick={() => handleSorting("quantity")} as="button" color="#fff" variants="subtitle2">
            {t("AccrualsTitleQuantity")} BTC
            <SortIcon />
          </Quantity>
        </AccrualsTalbeHead>
        <AccrualsTalbeBody>
          {data.map(({ id, date, depositID, quantity }) => (
            <AccrualsTalbeRow key={id}>
              <ID as="div" color="#313131" variants="subtitle2">
                {id}
              </ID>

              <Date as="div" color="#313131" variants="subtitle2">
                {date}
              </Date>

              <DepositID as="div" color="#313131" variants="subtitle2">
                {depositID}
              </DepositID>

              <Quantity as="div" color="#313131" variants="subtitle2">
                {quantity}
              </Quantity>
            </AccrualsTalbeRow>
          ))}
        </AccrualsTalbeBody>
      </AccrualsTable>
    </TableWrapperScroll>
  );
};
