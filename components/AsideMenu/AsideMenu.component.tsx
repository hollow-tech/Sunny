import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimateSharedLayout } from "framer-motion";

import { useIsMounted } from "../../hooks/useIsMounted";

import { Active, AsideItem, AsideLink, AsideList, Icon, Notification } from "./AsideMenu.styles";

import { AsideMenuProps } from "./AsideMenu.types";

import Logout from "./icons/logout.svg";

export const AsideMenu: React.VFC<AsideMenuProps> = ({ links, ...props }) => {
  const router = useRouter();
  const [active, setActive] = useState<number | undefined>(links.find((item) => item.href === router.pathname)?.id);
  const isMounted = useIsMounted();

  const handleActiveMenu = useCallback((id: number) => () => setActive(id), []);

  if (!isMounted) {
    return null;
  }

  return (
    <AsideList {...props}>
      <AnimateSharedLayout>
        {links.map(({ label, href, id, icon, notification }) => (
          <AsideItem key={id} onClick={handleActiveMenu(id)}>
            <Link href={href} passHref>
              <AsideLink>
                <Icon>{icon}</Icon>
                {label}
                {notification && <Notification>{notification}</Notification>}
              </AsideLink>
            </Link>
            {active === id && <Active layoutId="active" />}
          </AsideItem>
        ))}
        <AsideItem>
          <AsideLink as="button">
            <Icon>
              <Logout />
            </Icon>
            Выход
          </AsideLink>
        </AsideItem>
      </AnimateSharedLayout>
    </AsideList>
  );
};
