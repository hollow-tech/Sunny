import {
  OrderTable,
  OrderTalbeBody,
  OrderTalbeHead,
  OrderTalbeRow,
  Acquired,
  Controll,
  Createat,
  ID,
  Price,
  Queues,
  Remainder,
  Remaining,
  Spent,
  Status,
  ButtonCancel,
  SortIcon,
} from "./Orders.styles";

import { data as DataMock } from "./Orders.data";
import { useTranslation } from "next-i18next";
import { OrdersProps } from "./Orders.types";
import { useSorting } from "../../../hooks/useSorting";
import { TableWrapperScroll } from "../../../components";

export const Orders: React.FC<OrdersProps> = () => {
  const { t } = useTranslation("Ordera");
  const { data, handleSorting } = useSorting(DataMock);
  return (
    <TableWrapperScroll>
      <OrderTable>
        <OrderTalbeHead>
          <ID onClick={() => handleSorting("id")} as="button" color="#fff" variants="subtitle2">
            ID
            <SortIcon />
          </ID>
          <Queues as="div" color="#fff" variants="subtitle2">
            № {t("OrderTalQueues")}
          </Queues>
          <Createat onClick={() => handleSorting("createat")} as="button" color="#fff" variants="subtitle2">
            {t("OrderTalCreateat")}
            <SortIcon />
          </Createat>

          <Price as="div" color="#fff" variants="subtitle2">
            {t("OrderTalPrice")} 1 SWH
          </Price>

          <Acquired as="div" color="#fff" variants="subtitle2">
            {t("OrderTalAcquired")} SWH
          </Acquired>

          <Remaining as="div" color="#fff" variants="subtitle2">
            {t("OrderTalRemaining")} SWH
          </Remaining>

          <Spent as="div" color="#fff" variants="subtitle2">
            {t("OrderTalSpent")} USDT
          </Spent>

          <Remainder as="div" color="#fff" variants="subtitle2">
            {t("OrderTalRemainder")} USDT
          </Remainder>

          <Status as="div" color="#fff" variants="subtitle2">
            {t("OrderTalStatus")}
          </Status>

          <Controll as="div" variants="body1" />
        </OrderTalbeHead>
        <OrderTalbeBody>
          {data.map(({ id, queues, acquired, createat, price, remaining, spent, remainder, status }) => (
            <OrderTalbeRow key={id}>
              <ID as="div" color="#313131" variants="subtitle2">
                {id}
              </ID>
              <Queues as="div" color="#313131" variants="subtitle2">
                {queues}
              </Queues>
              <Createat as="div" color="#313131" variants="subtitle2">
                {createat}
              </Createat>

              <Price as="div" color="#313131" variants="subtitle2">
                {price} USDT
              </Price>

              <Acquired as="div" color="#313131" variants="subtitle2">
                {acquired}
              </Acquired>

              <Remaining as="div" color="#313131" variants="subtitle2">
                {remaining}
              </Remaining>

              <Spent as="div" color="#313131" variants="subtitle2">
                {spent}
              </Spent>

              <Remainder as="div" color="#313131" variants="subtitle2">
                {remainder}
              </Remainder>

              <Status as="div" color="#313131" variants="subtitle2">
                {status}
              </Status>
              <Controll variants="body1">
                <ButtonCancel color="#FFD004" variants="contained">
                  {t("ButtonCancel")}
                </ButtonCancel>
              </Controll>
            </OrderTalbeRow>
          ))}
        </OrderTalbeBody>
      </OrderTable>
    </TableWrapperScroll>
  );
};
