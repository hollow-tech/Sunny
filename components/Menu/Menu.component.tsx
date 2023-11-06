import Link from "next/link";
import { MenuItem, MenuLink, MenuList, MenuStyled } from "./Menu.styles";
import { MenuProps } from "./Menu.types";

export const Menu: React.FC<MenuProps> = ({ links, ...props }) => (
  <MenuStyled {...props}>
    <MenuList>
      {links.map(({ href, id, label }) => (
        <MenuItem key={id}>
          <Link href={href} passHref>
            <MenuLink>{label}</MenuLink>
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  </MenuStyled>
);
