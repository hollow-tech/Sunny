import {Btn, Text, Title, Wrapper} from './DepositeNotEnough.styles';

export const DepositeNotEnought = () => {
  return (
    <Wrapper>
        <Title variants='headline2'>У Вас не хватает средств!</Title>
        <Text variants="body1">Вы хотите депонировать больше SWH чем у Вас есть.</Text>
        <Btn color="#00439F" variants="outlined" >OK</Btn>
    </Wrapper>
  )
}
