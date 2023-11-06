import {
  Block,
  BottomText,
  ButtonConfirm,
  Link,
  Text,
  TextBlock,
  Title,
} from "./EmailLettersRecovery.styled";

export const EmailLettersRecovery = () => {
  return (
    <Block>
      <Title variants="headline2">Восстановление пароля</Title>
      <TextBlock>
        <Text variants="body1">Здравствуйте!</Text>
        <Text variants="body1">
          Вы отправили запрос на восстановление пароля. Для того, чтобы задать
          новый пароль нажмите на кнопку или перейдите по ссылке ниже
        </Text>
        <ButtonConfirm color="#00439F" variants="contained">
          Восстановить пароль
        </ButtonConfirm>
        <Link as="a" href="#" variants="body1">
          Ссылка для восстановление пароля
        </Link>
        <Text variants="body1">
          Пожалуста проигнорируйте это письмо, если оно попало к вам по ошибке.
          Ваш пароль хранится в надежном месте и недоступен посторонним лицам
        </Text>
        <BottomText variants="subtitle1">
          С увадением,
          <br />
          Команда Sunny Watt Hour
        </BottomText>
      </TextBlock>
    </Block>
  );
};
