import { copyToClipboard } from "../../../utils/bufferCopy";
import {
  AdressText,
  AttentionContainer,
  AttentionImage,
  AttentionText,
  Btn1,
  Btn2,
  ButtonContainer,
  AttentionTextContainer,
  LinkPath,
  SubTitle,
  Title,
  Wrapper,
  LinkAboutCommision,
} from "./AddBalance.styles";
import { AddBalanceProps } from "./AddBalance.type";

export const AddBalance: React.FC<AddBalanceProps> = ({ linkPurse, handleClick, purseCommission, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title variants="headline2">Пополнение USDT</Title>
      <AdressText variants="body1">Адрес кошелька:</AdressText>
      <LinkPath variants="headline3">{linkPurse}</LinkPath>
      <AttentionContainer>
        <AttentionImage src="/content/attention/attention.svg" />
        <AttentionTextContainer>
          <AttentionText variants="body1">Выполнение операции может занять несколько часов</AttentionText>
          <AttentionText variants="body1">
            За пополнение{" "}
            <LinkAboutCommision as="a" href="#" variants="body1">
              взимается комиссия
            </LinkAboutCommision>
          </AttentionText>
        </AttentionTextContainer>
      </AttentionContainer>
      <SubTitle variants="headline3">Можно пополнить без комиссии {purseCommission} USDT</SubTitle>
      <ButtonContainer>
        <Btn1 onClick={handleClick} color="#00439F" variants="outlined">
          Назад
        </Btn1>
        <Btn2 onClick={() => copyToClipboard(linkPurse)} color="#00439F" variants="contained">
          Копировать адрес кошелька
        </Btn2>
      </ButtonContainer>
    </Wrapper>
  );
};
