import styled from "styled-components";
import { Button, Paper, Typography } from "../../../components";

export const Wrapper = styled(Paper)`
    max-width: 760px;
    padding: 50px 72px 50px 60px;
`;
export const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 21px;
`;
export const AdressText = styled(Typography)`
    margin-bottom: 12px;
`;
export const LinkPath = styled(Typography)`
    margin-bottom: 37px;
`;
export const AttentionContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const AttentionImage = styled.img`
    margin-right: 4px;
    padding-bottom: 55px;
`;
export const AttentionTextContainer = styled.div`
    margin-bottom: 44px;
`;
export const AttentionText = styled(Typography)`
    margin-bottom: 4px;
`;
export const SubTitle = styled(Typography)`
    margin-bottom: 41px;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Btn1 = styled(Button)`
    max-width: 110px;
`;
export const Btn2 = styled(Button)`
    margin-left: 20px;
    max-width: 330px;
`;
export const LinkAboutCommision = styled(Typography)`
    color: #52A90D;
`;