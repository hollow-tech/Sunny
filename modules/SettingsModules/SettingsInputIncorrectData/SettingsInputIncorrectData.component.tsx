import {Btn, BtnContainer, Title, Wrapper} from './SettingsInputIncorrectData.styles';

export const SettingsInputIncorrectData = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Вы ввели неправильные данные!</Title>
      <BtnContainer>
        <Btn color="#00439F" variants="outlined">
          Я понял
        </Btn>
      </BtnContainer>
    </Wrapper>
  )
}
