import {
  Btn1,
  Btn2,
  BtnContainer,
  Text,
  Title,
  Wrapper,
} from "./SettingsConfirmChangePassword.component";

export const SettingsConfirmChangePassword = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Подтверждение смены пароля. </Title>
      <Text variants="body1">
        Вы уверены? Ваша авторизация будет сброшена. Перед тем, как
        авторизоваться с помощью нового пароля необходимо будет перейти по
        ссылке, которая будет отправлена в письме на Ваш e-mail адрес;
      </Text>
      <BtnContainer>
        <Btn1 color="#00439F" variants="contained">
          Да
        </Btn1>
        <Btn2 color="#00439F" variants="outlined">
          Отмена
        </Btn2>
      </BtnContainer>
    </Wrapper>
  );
};
