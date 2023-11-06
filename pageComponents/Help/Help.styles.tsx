import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { Paper, TextField, Typography, Select } from "../../components";
import InfoImg from "./icons/Info.svg";
import ListImg from "./icons/list.svg";

export const HelpStyled = styled.div`
  padding: 60px 0;
`;
export const Wrapper = styled(Paper)`
  max-width: 1430px;
  width: 100%;
  padding: 75px 98px;

  @media(max-width: 1700px) {
    padding: 60px;
  }
`;
export const MainTitle = styled(Typography)`
  text-align: center;
`;
export const BlockStart = styled.div`
  max-width: 460px;
  width: 100%;
`;
export const BlockEnd = styled.div`
  max-width: 650px;
  width: 100%;
  margin-left: 75px;
`;
export const Input = styled(TextField)`
  margin-bottom: 30px;
  background-color: #fff;
`;
export const TextArea = styled(TextField)`
  resize: none;
  border: 1px solid #646464;
  border-radius: 5px;
  padding: 30px;
  width: 100%;
  height: 178px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.device.laptopL} {
    height: 120px;
    padding: 15px 20px;
  }
`;
export const Inner = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const ReCaptcha = styled(ReCAPTCHA)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const InfoBlock = styled.div`
  display: flex;
`;
export const IconInfo = styled(InfoImg)`
  flex-shrink: 0;
`;
export const IconList = styled(ListImg)`
  flex-shrink: 0;
`;
export const Info = styled.div`
  margin-bottom: 29px;
  margin-left: 14px;
`;
export const InfoTitle = styled(Typography)`
  margin-bottom: 10px;
`;
export const InfoText = styled(Typography)``;
export const SelectChoose = styled(Select)`
  margin-bottom: 30px;
`;
