import { Container } from "../../components";
import {
  NotificationsStyled,
  NotificationsTab,
  NotificationsTabList,
  NotificationsTabPanel,
  NotificationsTabs,
  NotificationsInner,
} from "./Notifications.styles";

import { Notifications as TableNotifications } from "../../modules";

import { NotificationsProps } from "./Notifications.types";
import { useTranslation } from "next-i18next";
export const Notifications: React.FC<NotificationsProps> = () => {
  const { t } = useTranslation("Notifications");
  return (
    <NotificationsStyled>
      <Container variants="auth">
        <NotificationsInner>
          <NotificationsTabs>
            <NotificationsTabList>
              <NotificationsTab>{t("NotificationsTabOne")}</NotificationsTab>
              <NotificationsTab>{t("NotificationsTabTwo")}</NotificationsTab>
            </NotificationsTabList>
            <NotificationsTabPanel>
              <TableNotifications handleClick={() => console.log(1)} />
            </NotificationsTabPanel>
            <NotificationsTabPanel>
              <TableNotifications isReading />
            </NotificationsTabPanel>
          </NotificationsTabs>
        </NotificationsInner>
      </Container>
    </NotificationsStyled>
  );
};
