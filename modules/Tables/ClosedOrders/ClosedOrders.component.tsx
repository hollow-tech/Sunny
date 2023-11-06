import {
  ID,
  CompletionDate,
  Createat,
  NotPurchased,
  Price,
  Purchased,
  Returned,
  Spent,
  Status,
  ClosedOrdersTable,
  ClosedOrdersTalbeBody,
  ClosedOrdersTalbeHead,
  ClosedOrdersTalbeRow,
  SortIcon,
} from "./ClosedOrders.styles";

import { useSorting } from "../../../hooks/useSorting";

import { dataMock } from "./ClosedOrders.data";

import { ClosedOrdersProps } from "./ClosedOrders.types";
import { useTranslation } from "next-i18next";
import { TableWrapperScroll } from "../../../components";
export const ClosedOrders: React.FC<ClosedOrdersProps> = () => {
  const { data, handleSorting } = useSorting(dataMock);
  const { t } = useTranslation("History");
  return (
    <TableWrapperScroll>
      <ClosedOrdersTable>
        <ClosedOrdersTalbeHead>
          <ID onClick={() => handleSorting("id")} as="button" color="#fff" variants="subtitle2">
            ID
            <SortIcon />
          </ID>
          <Createat color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitleCreateat")}
            <SortIcon />
          </Createat>
          <CompletionDate onClick={() => handleSorting("completionDate")} as="button" color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitleCompletionDate")}
            <SortIcon />
          </CompletionDate>

          <Price color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitlePrice")} 1 SWH
          </Price>

          <Purchased onClick={() => handleSorting("purchased")} as="button" color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitlePurchased")} SWH
            <SortIcon />
          </Purchased>

          <NotPurchased onClick={() => handleSorting("notPurchased")} as="button" color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitleNotPurchased")} SWH
            <SortIcon />
          </NotPurchased>

          <Spent onClick={() => handleSorting("spent")} as="button" color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitleSpent")} USDT
            <SortIcon />
          </Spent>

          <Returned onClick={() => handleSorting("returned")} as="button" color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitleReturned")} USDT
            <SortIcon />
          </Returned>

          <Status onClick={() => handleSorting("status")} as="button" color="#fff" variants="subtitle2">
            {t("ClosedOrdersTitleStatus")}
            <SortIcon />
          </Status>
        </ClosedOrdersTalbeHead>
        <ClosedOrdersTalbeBody>
          {data.map(({ id, createat, completionDate, price, purchased, notPurchased, spent, returned, status }) => (
            <ClosedOrdersTalbeRow key={id}>
              <ID color="#313131" variants="subtitle2">
                {id}
                <SortIcon />
              </ID>
              <Createat color="#313131" variants="subtitle2">
                {createat}
                <SortIcon />
              </Createat>
              <CompletionDate color="#313131" variants="subtitle2">
                {completionDate}
                <SortIcon />
              </CompletionDate>

              <Price color="#313131" variants="subtitle2">
                {price}
                <SortIcon />
              </Price>

              <Purchased color="#52A90D" variants="subtitle2">
                {purchased}
                <SortIcon />
              </Purchased>

              <NotPurchased color="#313131" variants="subtitle2">
                {notPurchased}
                <SortIcon />
              </NotPurchased>

              <Spent color="#F44336" variants="subtitle2">
                {spent}
                <SortIcon />
              </Spent>

              <Returned color="#52A90D" variants="subtitle2">
                {returned}
              </Returned>

              <Status color="#313131" variants="subtitle2">
                {status}
                <SortIcon />
              </Status>
            </ClosedOrdersTalbeRow>
          ))}
        </ClosedOrdersTalbeBody>
      </ClosedOrdersTable>
    </TableWrapperScroll>
  );
};
