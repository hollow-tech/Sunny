import {
  Btn,
  BtnContainer,
  Text,
  Title,
  Wrapper,
} from "./SettingsAuthorization2.styles";

export const SettingsAuthorization2 = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Ваша авторизация сброшена.</Title>
      <Text variants="body1">
        Перед тем, как авторизоваться с помощью нового пароля перейдите по
        ссылке, которая будет отправлена Вам в письме на Ваш адрес электронной
        почты
      </Text>
      <BtnContainer>
        <Btn color="#00439F" variants="outlined">
          Я понял
        </Btn>
      </BtnContainer>
    </Wrapper>
  );
};
