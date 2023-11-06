import {
  Wrapper,
  Btn1,
  Btn2,
  Text,
  Title,
  BtnContainer,
} from "./DepositeConfirm.styled";

export const DepositeConfirm = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Подтвержения снятия депозита</Title>
      <Text variants="body1">
        Депонированные SWH будут немедленно изъяты из депозита и станут доступны
        для выполнения любых операций. Запись о депозите будет помещена в раздел
        Снятые депозиты, где будет находиться до момента получения последних
        дивидендов. Дивиденды начисляются один раз в месяц (10-го числа). После
        получения последних дивидендов (за данный месяц, согласно учтенному
        количеству целых суток) запись о депозите будут убрана из списка Снятые
        депозиты
      </Text>
      <BtnContainer>
        <Btn1 color="#00439F" variants="contained">
          Снять депозит
        </Btn1>
        <Btn2 color="#00439F" variants="outlined">
          Назад
        </Btn2>
      </BtnContainer>
    </Wrapper>
  );
};
