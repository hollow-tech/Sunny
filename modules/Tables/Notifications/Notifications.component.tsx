import { dataMock } from "./Notifications.data";
import {
  NotificationsTable,
  NotificationsTalbeBody,
  NotificationsTalbeHead,
  NotificationsTalbeRow,
  Date,
  ID,
  NotificationMessage,
  ButtonMessage,
  NotificationIcon,
} from "./Notifications.styles";
import { NotificationsProps } from "./Notifications.types";
import { useTranslation } from "next-i18next";
import { TableWrapperScroll } from "../../../components";
export const Notifications: React.FC<NotificationsProps> = ({ handleClick, isReading, ...props }) => {
  const { t } = useTranslation("Notifications");
  return (
    <TableWrapperScroll>
      <NotificationsTable {...props}>
        <NotificationsTalbeHead>
          <ID head={!isReading} color="#fff" variants="subtitle2">
            ID
          </ID>

          <Date color="#fff" variants="subtitle2">
            {t("NotificationsTitleDate")}
          </Date>

          <NotificationMessage color="#fff" variants="subtitle2">
            {t("NotificationsTitleMessage")}
          </NotificationMessage>
        </NotificationsTalbeHead>
        <NotificationsTalbeBody>
          {dataMock.map(({ id, date, notification }) => (
            <NotificationsTalbeRow key={id}>
              {!isReading && <NotificationIcon />}
              <ID as="div" color="#313131" variants="subtitle2">
                {id}
              </ID>

              <Date as="div" color="#313131" variants="subtitle2">
                {date}
              </Date>

              <NotificationMessage as="div" color="#313131" variants="subtitle2">
                {notification}
              </NotificationMessage>

              {handleClick && (
                <ButtonMessage onClick={() => handleClick()} color="#FFD004" variants="contained">
                  {t("NotificationsButtonMessage")}
                </ButtonMessage>
              )}
            </NotificationsTalbeRow>
          ))}
        </NotificationsTalbeBody>
      </NotificationsTable>
    </TableWrapperScroll>
  );
};
