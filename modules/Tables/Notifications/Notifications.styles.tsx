import styled from "styled-components";

import { Typography, TalbeHead, Talbe, TalbeRow, TalbeBody, Button } from "../../../components";

import Notification from "../icons/notification.svg";

export const NotificationsTable = styled(Talbe)`
  max-width: 1440px;
`;
export const NotificationsTalbeHead = styled(TalbeHead)`
  padding-left: 40px;
  padding-right: 40px;
  @media ${({ theme }) => theme.device.laptopL} {
    min-height: 60px;
  }
`;
export const NotificationsTalbeRow = styled(TalbeRow)`
  padding-left: 40px;
  padding-right: 40px;
  min-height: 85px;

  @media ${({ theme }) => theme.device.laptopL} {
    min-height: 60px;
  }
`;

export const NotificationsTalbeBody = styled(TalbeBody)``;

export const ID = styled(Typography)<{ head?: boolean }>`
  margin-right: 62px;
  width: 100%;
  max-width: 68px;
  ${({ head }) => head && `  margin-left: 69px;`}
`;

export const Date = styled(Typography)`
  margin-right: 67px;
  width: 100%;
  max-width: 78px;
`;

export const NotificationMessage = styled(Typography)`
  margin-right: 126px;
  width: 100%;
  max-width: 612px;
`;

export const ButtonMessage = styled(Button)`
  max-width: 262px;
  font-size: 16px;

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 10px;
    font-size: 12px;
    max-width: 200px;
  }
`;

export const NotificationIcon = styled(Notification)`
  margin-right: 45px;
  flex-shrink: 0;
`;
