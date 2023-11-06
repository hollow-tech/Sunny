import { OrderStyled, ButtonCreate, Panel, WafeSVG, OrderInner } from "./Order.styles";
import { OrderProps } from "./Order.types";
import { Container } from "../../components";
import { Orders } from "../../modules";
import { useTranslation } from "next-i18next";

export const Order: React.FC<OrderProps> = () => {
  const { t } = useTranslation("Ordera");
  return (
    <OrderStyled>
      <WafeSVG />
      <Container variants="auth">
        <OrderInner>
          <Panel>
            <ButtonCreate color="#00439F" variants="outlined">
              + {t("ButtonCreate")}
            </ButtonCreate>
          </Panel>
          <Orders />
        </OrderInner>
      </Container>
    </OrderStyled>
  );
};
