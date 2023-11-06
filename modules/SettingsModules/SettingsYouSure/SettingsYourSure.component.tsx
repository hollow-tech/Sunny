import {
  Btn1,
  Btn2,
  BtnContainer,
  Text,
  Wrapper,
  Title,
} from "./SettingsYourSure.styles";

export const SettingsYourSuret = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Вы уверены?</Title>
      <Text variants="body1">
        Ваша авторизация будет сброшена. Перед тем, как авторизоваться с помощью
        нового пароля необходимо будет перейти по ссылке, которая будет
        отправлена в письме на Ваш e-mail адрес
      </Text>
      <BtnContainer>
          <Btn1 color="#00439F" variants="contained">Да</Btn1>
          <Btn2 color="#00439F" variants="outlined">Отмена</Btn2>
      </BtnContainer>
    </Wrapper>
  );
};
