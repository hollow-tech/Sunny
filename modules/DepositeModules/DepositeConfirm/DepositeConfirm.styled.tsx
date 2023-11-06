import styled from "styled-components";
import { Button, Paper, Typography } from "../../../components";

export const Wrapper = styled(Paper)`
    text-align: center;
    max-width: 760px;
    padding: 50px 60px;
`;
export const Title = styled(Typography)`
    margin-bottom: 21px;
`;
export const Text = styled(Typography)`
    text-align: left;
    margin-bottom: 28px;
`;
export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;  
`;
export const Btn1 = styled(Button)`
    max-width: 190px;
`;
export const Btn2 = styled(Button)`
    max-width: 110px;
    margin-left: 24px;
`;