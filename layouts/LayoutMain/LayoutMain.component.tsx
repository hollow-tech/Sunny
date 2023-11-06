import { Content, FooterWrapper, Wrapper } from "./LayoutMain.styles";
import { Footer, HeaderMain } from "../../modules";
import { LayoutMainProps } from "./LayoutMain.types";

export const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  return (
    <>
      <HeaderMain />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};
