import {
  Btn1,
  Btn2,
  BtnContainer,
  Text,
  Title,
  Wrapper,
} from "./SettingsWillReset.styles";

export const SettingsWillReset = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Ваша авторизация будет сброшена.</Title>
      <Text variants="body1">
        На ваш старый e-mail будет отправлена ссылка для отмены операции. Если в
        течение трех суток она не будет активирована, второе письмо будет
        отправлено на указанный Вами новый адрес электронной почты. Перед тем,
        как авторизоваться заново перейдите по ссылке, которая будет отправлена
        Вам в письме на Ваш новый адрес электронной почты;
      </Text>
      <BtnContainer>
        <Btn1 color="#00439F" variants="contained">
          Далее
        </Btn1>
        <Btn2 color="#00439F" variants="outlined">
          Отмена
        </Btn2>
      </BtnContainer>
    </Wrapper>
  );
};
