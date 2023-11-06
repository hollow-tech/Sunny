import Link from "next/link";
import { Container } from "../../../components";
import { languages } from "../../../components/Languages/Languages.data";
import {
  HeaderMainButtons,
  HeaderMainInner,
  HeaderMainLanguages,
  HeaderMainLogo,
  HeaderMainMenu,
  HeaderMainStyled,
  HeaderMainSignIn,
  HeaderMainSignUp,
} from "./HeaderMain.styles";
import { HeaderMainProps } from "./HeaderMain.types";

export const HeaderMain: React.FC<HeaderMainProps> = () => {
  return (
    <HeaderMainStyled>
      <Container variants="main">
        <HeaderMainInner>
          <Link href="/" passHref>
            <HeaderMainLogo tag="a" />
          </Link>
          <HeaderMainMenu
            links={[
              { href: "/", id: 1, label: "Главная" },
              { href: "/#FAQ", id: 2, label: "Вопросы" },
            ]}
          />
          <HeaderMainLanguages color="#fff" languages={languages} />
          <HeaderMainButtons>
            <Link href="/signin" passHref>
              <HeaderMainSignIn as="a" color="#fff" variants="contained">
                Войти
              </HeaderMainSignIn>
            </Link>

            <Link href="/signup" passHref>
              <HeaderMainSignUp as="a" color="#fff" variants="outlined">
                Зарегистрироваться
              </HeaderMainSignUp>
            </Link>
          </HeaderMainButtons>
        </HeaderMainInner>
      </Container>
    </HeaderMainStyled>
  );
};
