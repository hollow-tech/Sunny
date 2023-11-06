import {
  Block,
  BottomText,
  ButtonConfirm,
  Link,
  Text,
  TextBlock,
  Title,
} from "./EmailLettersRegistration.styles";

export const EmailLettersRegistration = () => {
  return (
    <Block>
      <Title variants="headline2">Регистрация в  Sunny Watt Hour </Title>
      <TextBlock>
        <Text variants="body1">Здравствуйте!</Text>
        <Text variants="body1">Для того, чтобы подтвердить регистрацию нажмите на кнопку или перейдите по ссылке</Text>
        <ButtonConfirm color="#00439F" variants="contained">
          Подтвердить регистрацию
        </ButtonConfirm>
        <Link as="a" href="#" variants="body1">
          Ссылка для перехода на сайт
        </Link>
        <BottomText variants="subtitle1">
          С увадением,
          <br />
          Команда Sunny Watt Hour
        </BottomText>
      </TextBlock>
    </Block>
  );
};
