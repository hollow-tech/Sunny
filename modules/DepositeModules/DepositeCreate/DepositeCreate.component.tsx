import { Button, Typography } from "../../../components";
import {
  Wrapper,
  Title,
  Text,
  ButtonConteiner,
  ButtonOK,
} from "./DepositeCreate.styles";

export const DepositeCreate = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Депозит создан</Title>
      <Text variants="body1">
        Минимальная единица измерения времени нахождения пула монет в депозите –
        целые календарные сутки (т.е. для того чтобы были зачтены одни сутки
        нахождения пула монет в депозите, он должен без перерыва находиться там
        с 00:00 по Московскому времени, до 00:00 по Московскому времени
        следующего числа; Дивиденды начисляются один раз в месяц (10-го числа).
      </Text>
      <ButtonConteiner>
        <ButtonOK color="#00439F" variants="outlined">
          OK
        </ButtonOK>
      </ButtonConteiner>
    </Wrapper>
  );
};
