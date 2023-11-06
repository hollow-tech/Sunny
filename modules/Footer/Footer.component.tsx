import Link from "next/link";
import { Container } from "../../components";
import { FooterStyled, FooterItem, FooterList, FooterNav, FooterLink } from "./Footer.styles";
import { FooterProps } from "./Footer.types";

import { menuFooter } from "./Footer.data";

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterStyled>
      <Container variants="auth">
        <FooterNav>
          <FooterList>
            <FooterItem>
              <FooterLink>Sunny Watt Hour © 2010-2022</FooterLink>
            </FooterItem>
            {menuFooter.map(({ href, label }, index) => (
              <FooterItem key={index}>
                <Link href={href}>
                  <FooterLink hover>{label}</FooterLink>
                </Link>
              </FooterItem>
            ))}
          </FooterList>
        </FooterNav>
      </Container>
    </FooterStyled>
  );
};
