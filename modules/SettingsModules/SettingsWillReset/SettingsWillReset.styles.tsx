import styled from "styled-components";
import { Button, Paper, Typography } from "../../../components";


export const Wrapper = styled(Paper)`
    max-width: 760px;
    text-align: center;
    padding: 40px 60px;
`;
export const Title = styled(Typography)`
    margin-bottom: 30px;
`;
export const Text = styled(Typography)`
    margin-bottom: 30px;
    text-align: left;
`;
export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Btn1 = styled(Button)`
    max-width: 110px;
`;
export const Btn2 = styled(Button)`
    margin-left: 20px;
    max-width: 125px;
`;
