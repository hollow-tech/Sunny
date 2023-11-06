import {
  Block,
  BottomText,
  ButtonConfirm,
  Link,
  Text,
  TextBlock,
  Title,
} from "./EmailLettersNotPaid.styled";

export const EmailLettersNotPaid = () => {
  return (
    <Block>
      <Title variants="headline2">У вас есть неоплаченный заказ</Title>
      <TextBlock>
        <Text variants="body1">Здравствуйте!</Text>
        <Text variants="body1">Вы создали заказ #12334 на 20 SWH</Text>
        <Text variants="body1">
          Для продолжения оплаты заказа нажмите на кнопку<br/> или перейдите по 
          ссылке
        </Text>
        <ButtonConfirm color="#00439F" variants="contained">
          Подтвердить регистрацию
        </ButtonConfirm>
        <Link as="a" href="#" variants="body1">
          Ссылка для перехода
        </Link>
        <BottomText variants="subtitle1">
          С увадением,<br/>Команда Sunny Watt Hour
        </BottomText>
      </TextBlock>
    </Block>
  );
};
