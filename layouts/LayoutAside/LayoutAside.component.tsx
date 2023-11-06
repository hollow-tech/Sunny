import { Footer, HeaderAuthorization } from "../../modules";
import { AsideMenu } from "../../components";
import { AsideStyled, Content, FooterWrapper, Wrapper, Main, Aside, Logotype } from "./LayoutAside.styles";
import { LayoutAsideProps } from "./LayoutAside.types";
import { links } from "../../components/AsideMenu/AsideMenu.data";

export const LayoutAside: React.FC<LayoutAsideProps> = ({ children }) => {
  return (
    <AsideStyled>
      <Aside>
        <Logotype variants="aside" />
        <AsideMenu links={links} />
      </Aside>
      <Main>
        <HeaderAuthorization />
        <Content>
          <Wrapper>{children}</Wrapper>
        </Content>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Main>
    </AsideStyled>
  );
};
