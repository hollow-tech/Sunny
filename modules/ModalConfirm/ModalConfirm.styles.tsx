import styled from "styled-components";
import { Button, Paper, Typography } from "../../components";

export const ModalConfirmStyled = styled(Paper)`
  max-inline-size: 760px;
  padding: 50px 60px;
`;

export const ModalConfirmTitle = styled(Typography)`
  text-align: center;
  margin-block-end: 21px;
`;

export const ModalConfirmDescription = styled(Typography)`
  margin-block-end: 32px;
`;

export const ModalConfirmWrapperButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalConfirmPrimary = styled(Button)`
  width: auto;
  margin-inline-end: 35px;
`;

export const ModalConfirmSecondery = styled(Button)`
  inline-size: auto;
`;
