import { Wrapper, Btn, Text, Title, Link } from "./DepositeError.styles";

export const DepositeErrors = () => {
  return (
    <Wrapper>
      <Title variants="headline2">Ошибка!</Title>
      <Text variants="body1">
        Операция не выполнена по техническим причинам. Попробуйте обновить
        страницу и повторить операцию несколько позднее. В случае повторения
        ошибки свяжитесь с администрацией при помощи <Link as='a' href='#' variants='body1'>формы обратной связи</Link>  
      </Text>
      <Btn color="#00439F" variants="outlined">OK</Btn>
    </Wrapper>
  );
};
