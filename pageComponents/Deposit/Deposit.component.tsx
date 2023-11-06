import { useRef } from "react";
import {
  DepositStyled,
  WafeSVG,
  DepositInner,
  DepositCardInfo,
  DepositCreate,
  WrapperFlex,
  DepositTab,
  DepositTabList,
  DepositTabPanel,
  DepositTabs,
  InfoDeposit,
  Icon,
  Text,
} from "./Deposit.styles";
import { DepositProps } from "./Deposit.types";
import { Container, Modal } from "../../components";
import { Deposits as TableDeposits, ModalConfirm } from "../../modules";
import { ModalRef } from "../../components/Modal/Modal.types";
import { useTranslation } from "next-i18next";

export const Deposit: React.FC<DepositProps> = () => {
  const { t } = useTranslation("Deposit");
  const controller = useRef<ModalRef>(null);
  return (
    <DepositStyled>
      <WafeSVG />
      <Container variants="auth">
        <DepositInner>
          <WrapperFlex>
            <DepositCreate handleClick={() => controller.current?.open()} />
            <DepositCardInfo
              title={t("DepositCardInfoTitle")}
              markColor="#52A90D"
              currency="SWH"
              colorСurrency="#FFD004"
              balance="1254,34"
            />

            <DepositCardInfo
              title={t("DepositCardInfoTitle")}
              markColor="#FFD004"
              currency="SWH"
              colorСurrency="#FFD004"
              balance="1254,34"
            />

            <DepositCardInfo
              title={t("DepositCardInfoTitle")}
              markColor="#2D62EA"
              currency="SWH"
              colorСurrency="#FFD004"
              balance="1254,34"
            />
          </WrapperFlex>

          <DepositTabs>
            <DepositTabList>
              <DepositTab>{t("DepositTabOne")}</DepositTab>
              <DepositTab>{t("DepositTabTwo")}</DepositTab>
              <DepositTab>{t("DepositTabThree")}</DepositTab>
            </DepositTabList>
            <DepositTabPanel>
              <TableDeposits handleClick={() => console.log("deposit")} />
            </DepositTabPanel>
            <DepositTabPanel>
              <Text variants="body1">
                <Icon />
                {t("DepositTabTextTwo")}
              </Text>
              <TableDeposits />
            </DepositTabPanel>
            <DepositTabPanel>
              <Text variants="body1">
                <Icon />
                {t("DepositTabTextThree")}
              </Text>
              <TableDeposits />
            </DepositTabPanel>
          </DepositTabs>

          <InfoDeposit />
        </DepositInner>
      </Container>
      <Modal ref={controller}>
        <ModalConfirm
          title={t("ModalConfirmTitle")}
          text={t("ModalConfirmText")}
          seconderyButtonText="Ок"
          seconderyHandleClick={() => controller.current?.close()}
        />
      </Modal>
    </DepositStyled>
  );
};
