import {Block,BottomText,ButtonConfirm,Text,TextBlock,Title} from './EmailLettersPasswordChange.styled';

export const EmailLettersPasswordChange= () => {
  return (
    <Block>
      <Title variants="headline2">Ваш пароль изменен</Title>
      <TextBlock>
        <Text variants="body1">Здравствуйте!</Text>
        <Text variants="body1">Уведомляем вас, что пароль от вашего аккаунта был изменен</Text>
        <BottomText variants="subtitle1">
          С увадением,<br/>Команда Sunny Watt Hour
        </BottomText>
      </TextBlock>
    </Block>
  )
}
