import { Container } from "../../../components";
import { languages } from "../../../components/Languages/Languages.data";
import {
  HeaderAuth,
  HeaderAuthInner,
  HeaderAuthLang,
  HeaderAuthName,
  HeaderAuthWelcome,
  HeaderAuthWrapper,
} from "./HeaderAuthorization.styles";
import { HeaderAuthorizationProps } from "./HeaderAuthorization.types";

export const HeaderAuthorization: React.FC<HeaderAuthorizationProps> = ({ userName = "Leslie Alexander" }) => {
  return (
    <HeaderAuth>
      <Container variants="auth">
        <HeaderAuthInner>
          <HeaderAuthWrapper>
            <HeaderAuthWelcome variants="body1">Привет</HeaderAuthWelcome>
            <HeaderAuthName variants="headline2">{userName}</HeaderAuthName>
          </HeaderAuthWrapper>
          <HeaderAuthLang languages={languages} />
        </HeaderAuthInner>
      </Container>
    </HeaderAuth>
  );
};
