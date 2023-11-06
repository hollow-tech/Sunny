import {
  Btn,
  BtnContainer,
  Text,
  Title,
  Wrapper,
} from "./SettingsAuthorization1.styles";

export const SettingsAuthorization1 = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Ваша авторизация сброшена.</Title>
      <Text variants="body1">
        На ваш старый e-mail отправлена ссылка для отмены операции. Если в
        течение трех суток она не будет активирована, второе письмо будет
        отправлено на указанный Вами новый адрес электронной почты. Перед тем,
        как авторизоваться заново перейдите по ссылке, которая будет отправлена
        Вам в письме на Ваш новый адрес электронной почты
      </Text>
      <BtnContainer>
        <Btn color="#00439F" variants="outlined">
          Я понял
        </Btn>
      </BtnContainer>
    </Wrapper>
  );
};
