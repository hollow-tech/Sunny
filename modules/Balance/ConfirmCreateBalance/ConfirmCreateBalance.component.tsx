import {
  Btn1,
  Btn2,
  ButtonContainer,
  CreateOrderText,
  CreateOrderTitel,
  ReCAPTCHA,
  Text,
  Title,
  Total,
  Wrapper,
  ReCaptcha,
} from "./ConfirmCreateBalance.styles";
import { ConfirmCreateBalanceProps } from "./ConfirmCreateBalance.type";
export const ConfirmCreateBalance: React.FC<ConfirmCreateBalanceProps> = ({buy, total}) => {
  return (
    <Wrapper>
      <Title variants="headline2">Подтверждение создания ордера</Title>
      <Text variants="body1">
        Созданный ордер на покупку SWHT или будет выполнен немедленно (при
        наличии возможности) или поэтапно, по мере эмиссии SWHT в обращение и
        выполнения предыдущих по очереди ордеров, созданных пользователями.
        Невыполненный или частично выполненный ордер может быть отменен в любой
        момент
      </Text>
      <CreateOrderTitel variants="headline3">
        Создать ордер на покупку {buy} SWH
      </CreateOrderTitel>
      <CreateOrderText variants="body1">Сумма указана верно?</CreateOrderText>
      <Total variants="headline3">Итого будет потрачено {total} USDT</Total>
      <ReCaptcha>
        <ReCAPTCHA sitekey="6LdQwHceAAAAADb_wJVa8g2XalJ9g3YqDDeU1Ztz" />
      </ReCaptcha>
      <ButtonContainer>
        <Btn1 color="#00439F" variants="contained">
          Создать ордер
        </Btn1>
        <Btn2 color="#00439F" variants="outlined">
          Назад
        </Btn2>
      </ButtonContainer>
    </Wrapper>
  );
};
