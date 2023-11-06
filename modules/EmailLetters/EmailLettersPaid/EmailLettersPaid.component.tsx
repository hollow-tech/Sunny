import {
  Block,
  BottomText,
  ButtonConfirm,
  Text,
  TextBlock,
  Title,
} from "./EmailLettersPaid.styled";

export const EmailLettersPaid = () => {
  return (
    <Block>
      <Title variants="headline2">Заказ #12334 оплачен</Title>
      <TextBlock>
        <Text variants="body1">Спасибо, что оплатили заказ на 2 SWH</Text>
        <Text variants="body1">
          Основное преимущество Sunny Watt Hour — это возможность стать
          причастностым к решению экологических проблем на планете, при этом вы
          зарабатываете
        </Text>
        <ButtonConfirm color="#00439F" variants="contained">
          Перейти в личный кабинет
        </ButtonConfirm>
        <BottomText variants="subtitle1">
          С увадением,
          <br />
          Команда Sunny Watt Hour
        </BottomText>
      </TextBlock>
    </Block>
  );
};
