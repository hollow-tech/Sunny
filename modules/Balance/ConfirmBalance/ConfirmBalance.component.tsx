import { Typography } from "../../../components";
import {
  Btn1,
  Btn2,
  ButtonContainer,
  Title,
  Wrapper,
  OutputCommisionContainer,
  OutputFunds,
  OutputInfoContainer,
  TypeCommisionContainer,
  AdressPurse,
  AdressPurseTitle,
  AdressQuestion,
  AttentionContainer,
  AttentionImg,
  AttentionText,
  CodeConfirm,
} from "./ConfirmBalance.styles";
import { ConfirmBalanceProps } from "./ConfirmBalance.type";
export const ConfirmBalance: React.FC<ConfirmBalanceProps> = ({output, commision, fixedCommision, link, attention}) => {
  return (
    <Wrapper>
      <Title variants="headline2">Подтверждение вывода USDT</Title>
      <OutputFunds variants="headline3">Вывести {output} USDT</OutputFunds>
      <OutputInfoContainer>
        <OutputCommisionContainer>
          <Typography variants="body1">Комиссия за вывод</Typography>
          <Typography variants="headline3">{commision} USDT</Typography>
        </OutputCommisionContainer>
        <TypeCommisionContainer>
          <Typography variants="body1">Тип комиссии за вывод</Typography>
          <Typography variants="headline3">фиксированное {fixedCommision} USDT</Typography>
        </TypeCommisionContainer>
      </OutputInfoContainer>
      <AdressPurseTitle variants="body1">Адрес кошелька:</AdressPurseTitle>
      <AdressPurse variants="headline3">
        {link}
      </AdressPurse>
      <AdressQuestion variants="body1">Адрес верен?</AdressQuestion>
      <AttentionContainer>
        <AttentionImg src="content/attention/attention.svg"></AttentionImg>
        <AttentionText variants="body1">
          {attention}
        </AttentionText>
      </AttentionContainer>
      <CodeConfirm variants="headline2">Код подтверждения, полученный по e-mail</CodeConfirm>
      <ButtonContainer>
        <Btn1 color="#00439F" variants="contained">
          Вывод средств
        </Btn1>
        <Btn2 color="#00439F" variants="outlined">
          Назад
        </Btn2>
      </ButtonContainer>
    </Wrapper>
  );
};
