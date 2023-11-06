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
export const Btn = styled(Button)`
    max-width: 130px;
`;
