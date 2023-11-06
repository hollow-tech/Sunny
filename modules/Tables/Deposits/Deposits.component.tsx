import { useState } from "react";
import {
  OrderTable,
  OrderTalbeBody,
  OrderTalbeHead,
  OrderTalbeRow,
  Controll,
  Createat,
  ID,
  AccountedDay,
  AccountedMonth,
  AccruedUSDT,
  Collapsible,
  ArrowIcon,
  DepositedSWHT,
  AccrualID,
  AmountUSDT,
  CollapsibleBox,
  CollapsibleTitle,
  DateAccrual,
  WrapperFlex,
  ButtonDeposit,
  ButtonCollapsible,
} from "./Deposits.styles";

import { data as DataMock, Deposit } from "./Deposits.data";
import { useTranslation } from "next-i18next";
import { DepositsProps } from "./Deposits.types";
import { TableWrapperScroll } from "../../../components";

const DepositRow: React.VFC<Deposit> = ({
  id,
  createat,
  accountedDay,
  accountedMonth,
  accruedUSDT,
  depositedSWHT,
  accrualID,
  dateAccrual,
  amountUSDT,
  handleClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <OrderTalbeRow key={id}>
      <WrapperFlex>
        <ID color="#646464" variants="subtitle2">
          {id}
        </ID>
        <Createat color="#646464" variants="subtitle2">
          {createat}
        </Createat>
        <AccountedDay color="#646464" variants="subtitle2">
          {accountedDay}
        </AccountedDay>
        <AccountedMonth color="#646464" variants="subtitle2">
          {accountedMonth}
        </AccountedMonth>
        <AccruedUSDT color="#646464" variants="subtitle2">
          {accruedUSDT}
        </AccruedUSDT>
        <DepositedSWHT color="#646464" variants="subtitle2">
          {depositedSWHT}
        </DepositedSWHT>
        <Controll as="div" variants="body1">
          {handleClick && (
            <ButtonDeposit color="#52A90D" variants="contained">
              Снять депозит
            </ButtonDeposit>
          )}

          <ButtonCollapsible onClick={() => setIsOpen((prev) => !prev)} color="#52A90D" variants="text">
            {isOpen ? "Скрыть" : "Посмотреть депозит"}
            <ArrowIcon />
          </ButtonCollapsible>
        </Controll>
      </WrapperFlex>
      {isOpen && (
        <Collapsible>
          <CollapsibleBox>
            <CollapsibleTitle color="#313131" variants="subtitle2">
              ID начисления
            </CollapsibleTitle>
            <AccrualID color="#646464" variants="subtitle2">
              {accrualID}
            </AccrualID>
          </CollapsibleBox>
          <CollapsibleBox>
            <CollapsibleTitle color="#313131" variants="subtitle2">
              Дата начисления
            </CollapsibleTitle>
            <DateAccrual color="#646464" variants="subtitle2">
              {dateAccrual}
            </DateAccrual>
          </CollapsibleBox>
          <CollapsibleBox>
            <CollapsibleTitle color="#313131" variants="subtitle2">
              Сумма начисленых USDT
            </CollapsibleTitle>
            <AmountUSDT color="#646464" variants="subtitle2">
              {amountUSDT}
            </AmountUSDT>
          </CollapsibleBox>
        </Collapsible>
      )}
    </OrderTalbeRow>
  );
};

export const Deposits: React.FC<DepositsProps> = ({ handleClick }) => {
  const { t } = useTranslation("Deposit");
  return (
    <TableWrapperScroll>
      <OrderTable>
        <OrderTalbeHead>
          <ID color="#fff" variants="subtitle2">
            ID
          </ID>

          <Createat color="#fff" variants="subtitle2">
            {t("Createat")}
          </Createat>

          <AccountedDay color="#fff" variants="subtitle2">
            {t("AccountedDay")}
          </AccountedDay>

          <AccountedMonth color="#fff" variants="subtitle2">
            {t("AccountedMonth")}
          </AccountedMonth>

          <AccruedUSDT color="#fff" variants="subtitle2">
            {t("AccruedUSDT")}
          </AccruedUSDT>

          <DepositedSWHT color="#fff" variants="subtitle2">
            {t("DepositedSWHT")}
          </DepositedSWHT>

          <Controll as="div" variants="body1" />
        </OrderTalbeHead>
        <OrderTalbeBody>
          {DataMock.map(({ id, ...props }) => (
            <DepositRow handleClick={handleClick} key={id} id={id} {...props} />
          ))}
        </OrderTalbeBody>
      </OrderTable>
    </TableWrapperScroll>
  );
};
