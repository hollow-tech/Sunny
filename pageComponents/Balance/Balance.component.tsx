import { useRef } from "react";
import { Container } from "../../components";
import {
  WafeSVG,
  FlexWrapper,
  BalanceStyled,
  BalanceCardInfo,
  BalanceWalletSWH,
  BalanceWalletUSDT,
  BalanceBuySwh,
  BalanceSwhPrice,
  BalanceBuyTitle,
  BalanceSWH,
  BalanceWrapperTitle,
  BuySVG,
  BalanceBuyText,
  BalanceCreateOrder,
  TableOrderBody,
  TableOrderHead,
  TableOrderRow,
  TableOrder,
  TableOrderBodyNumberOrder,
  TableOrderBodySWHT,
  TableOrderHeadNumberOrder,
  TableOrderHeadSWHT,
  BalanceInner,
  TableOrderTitle,
  TableOrderDesc,
  TableWrapper,
  BalanceFlexWrapper,
  SWH,
  USDT,
  Wrapper,
  CreateOrderWrapper
} from "./Balance.styles";

import { BalanceProps } from "./Balance.types";

import { AddBalance } from "../../modules";
import { Modal } from "../../components";
import { ModalRef } from "../../components/Modal/Modal.types";
import { useTranslation } from "next-i18next";

export const Balance: React.FC<BalanceProps> = () => {
  const { t } = useTranslation("Balance");
  const controller = useRef<ModalRef>(null);
  return (
    <BalanceStyled>
      <WafeSVG />
      <BalanceInner>
        <Container variants="auth">
          <BalanceFlexWrapper>
            <BalanceWalletUSDT
              title={t("balanceWalletUSDT")}
              balance="14568,78"
              currency="USDT"
              colorСurrency="#32A5F9"
              buttonLabel={t("buttonLabel")}
              handleBtnClicl={() => controller.current?.open()}
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleOne")}
              btnLabel={t("btnLabel")}
              currency="USDT"
              balance="1254,34"
              colorСurrency="#00439F"
              markColor="#52A90D"
              href="/withdrawal"
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleTwo")}
              btnLabel={t("btnLabel")}
              currency="USDT"
              balance="1254,34"
              colorСurrency="#00439F"
              markColor="#FFD004"
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleThree")}
              btnLabel={t("btnLabel")}
              currency="USDT"
              balance="1254,34"
              colorСurrency="#00439F"
              markColor="#2D62EA"
            />
          </BalanceFlexWrapper>
          <BalanceFlexWrapper>
            <BalanceWalletSWH
              title={t("balanceWalletUSDT")}
              balance="14568,78"
              currency="SWH"
              colorСurrency="#FFD004"
              buttonLabel={t("buttonLabel")}
              handleBtnClicl={() => controller.current?.open()}
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleOne")}
              btnLabel={t("btnLabel")}
              currency="SWH"
              balance="1254,34"
              colorСurrency="#FFD004"
              markColor="#52A90D"
              href="/withdrawal"
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleTwo")}
              btnLabel={t("btnLabel")}
              currency="SWH"
              balance="1254,34"
              colorСurrency="#FFD004"
              markColor="#FFD004"
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleThree")}
              btnLabel={t("btnLabel")}
              currency="SWH"
              balance="1254,34"
              colorСurrency="#FFD004"
              markColor="#2D62EA"
            />
          </BalanceFlexWrapper>
          <BalanceFlexWrapper>
            <BalanceWalletSWH
              title={t("balanceWalletUSDT")}
              balance="14568,78"
              currency="BTC"
              colorСurrency="#fff"
              buttonLabel={t("buttonLabel")}
              handleBtnClicl={() => controller.current?.open()}
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleOne")}
              btnLabel={t("btnLabel")}
              currency="SWH"
              balance="1254,34"
              colorСurrency="#313131"
              markColor="#52A90D"
              href="/withdrawal"
            />
            <BalanceCardInfo
              title={t("balanceCardInfoTitleTwo")}
              btnLabel={t("btnLabel")}
              currency="SWH"
              balance="1254,34"
              colorСurrency="#313131"
              markColor="#FFD004"
            />
          </BalanceFlexWrapper>
          <BalanceWrapperTitle>
            <BuySVG />
            <BalanceBuyTitle as="h2" variants="headline2">
              {t("BalanceBuyTitle")} <BalanceSWH>SWH</BalanceSWH>
            </BalanceBuyTitle>
          </BalanceWrapperTitle>
          <FlexWrapper>
            <BalanceBuySwh
              title={t("BalanceBuySwhTitle")}
              currency="SWH"
              quantity="1456/5000"
              info={t("BalanceBuySwhInfo")}
            />
            <BalanceSwhPrice
              title={
                <>
                  {t("BalanceSwhPriceTitle")} 1 {<SWH>SWH</SWH>}
                </>
              }
              rate={
                <>
                  1 {<SWH>SWH</SWH>} = 34,10 {<USDT>USDT</USDT>}
                </>
              }
              info={
                <>
                  {t("BalanceSwhPriceInfoOne")} 9 {<SWH>SWH</SWH>} {t("BalanceSwhPriceInfoTwo")} 131,04{" "}
                  {<USDT> USDT</USDT>}
                </>
              }
            />
            <BalanceBuyText variants="body1">{t("BalanceBuyText")}</BalanceBuyText>
          </FlexWrapper>

          <Wrapper>
            <TableOrderTitle variants="headline2">{t("TableOrderTitle")}</TableOrderTitle>

            <CreateOrderWrapper>
              <BalanceCreateOrder
                handleClick={() => console.log("click balance create order")}
                btnLabel={t("ButtonBuy")}
                currency="SWH"
                title={t("CreateOrderForBuy")}
                total="101,92"
                totalCurrency="USDT"
                totalText={t("TotalText")}
              />
              <TableWrapper>
                <TableOrder>
                  <TableOrderHead>
                    <TableOrderHeadNumberOrder variants="subtitle2">
                      {t("TableOrderHeadNumberOrder")}
                    </TableOrderHeadNumberOrder>
                    <TableOrderHeadSWHT variants="subtitle2">{t("TableOrderHeadSWHT")}</TableOrderHeadSWHT>
                  </TableOrderHead>
                  <TableOrderBody>
                    <TableOrderRow>
                      <TableOrderBodyNumberOrder variants="subtitle2">1</TableOrderBodyNumberOrder>
                      <TableOrderBodySWHT variants="subtitle2">50</TableOrderBodySWHT>
                    </TableOrderRow>

                    <TableOrderRow bgColor="#FDE3E1">
                      <TableOrderBodyNumberOrder variants="subtitle2">2</TableOrderBodyNumberOrder>
                      <TableOrderBodySWHT variants="subtitle2">50</TableOrderBodySWHT>
                    </TableOrderRow>

                    <TableOrderRow>
                      <TableOrderBodyNumberOrder variants="subtitle2">3</TableOrderBodyNumberOrder>
                      <TableOrderBodySWHT variants="subtitle2">50</TableOrderBodySWHT>
                    </TableOrderRow>

                    <TableOrderRow>
                      <TableOrderBodyNumberOrder variants="subtitle2">3</TableOrderBodyNumberOrder>
                      <TableOrderBodySWHT variants="subtitle2">50</TableOrderBodySWHT>
                    </TableOrderRow>

                    <TableOrderRow>
                      <TableOrderBodyNumberOrder variants="subtitle2">3</TableOrderBodyNumberOrder>
                      <TableOrderBodySWHT variants="subtitle2">50</TableOrderBodySWHT>
                    </TableOrderRow>

                    <TableOrderRow bgColor="#FDE3E1">
                      <TableOrderBodyNumberOrder variants="subtitle2">4</TableOrderBodyNumberOrder>
                      <TableOrderBodySWHT variants="subtitle2">50</TableOrderBodySWHT>
                    </TableOrderRow>
                  </TableOrderBody>
                </TableOrder>
              </TableWrapper>
            </CreateOrderWrapper>
            <TableOrderDesc variants="body1">
              {t("TableOrderDesc")} <span>{t("TableOrderDescSpan")}</span>
            </TableOrderDesc>
          </Wrapper>
        </Container>
      </BalanceInner>
      <Modal ref={controller}>
        <AddBalance
          handleClick={() => controller.current?.close()}
          linkPurse="https://tronscan.org/?//#/transaction/...   https://trons"
          purseCommission={20}
        />
      </Modal>
    </BalanceStyled>
  );
};
