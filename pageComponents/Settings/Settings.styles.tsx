import styled from "styled-components";
import { Paper, TextField, Typography } from "../../components";
import SettingsImage from "./icons/settings.svg";

import WafeTop from "./icons/wafe-top.svg";
import WafeBottom from "./icons/wafe-bottom.svg";

export const SettingsStyled = styled.div`
  padding: 60px 0;
  position: relative;
`;

export const WafeTopSVG = styled(WafeTop)`
  inline-size: 100%;
  position: absolute;
  z-index: 0;
  top: -5px;
`;
export const WafeBottomSVG = styled(WafeBottom)`
  position: absolute;
  bottom: -107px;
  z-index: 0;
  inline-size: 100%;

  @media ${({ theme }) => theme.device.laptopL} {
    bottom: -75px;
  }
`;

export const Wrapper = styled(Paper)`
  max-width: 1430px;
  display: flex;
  padding: 92px 145px;
  position: relative;
  z-index: 1;

  @media (max-width: 1700px) {
    padding: 60px;
  }
`;
export const BlockStart = styled.div`
  margin-right: 155px;
  max-width: 415px;
  width: 100%;
  align-items: center;
`;
export const BlockEnd = styled.div`
  max-width: 415px;
  align-items: center;
  width: 100%;
`;
export const NicknameTitle = styled(Typography)`
  margin-bottom: 4px;
`;
export const NicknameText = styled(Typography)`
  margin-bottom: 28px;
`;
export const NicknameInput = styled(TextField)`
  margin-bottom: 56px;
`;
export const InputsTitle = styled(Typography)`
  margin-bottom: 4px;
`;
export const InputsText = styled(Typography)`
  margin-bottom: 10px;
`;
export const Input = styled(TextField)`
  margin-bottom: 25px;
`;
export const Image = styled(SettingsImage)`
  margin-bottom: 5px;
`;
export const SettingYourPropfileTitle = styled(Typography)`
  margin-bottom: 10px;
`;
export const SettingYourPropfileText = styled(Typography)`
  margin-bottom: 30px;
`;
