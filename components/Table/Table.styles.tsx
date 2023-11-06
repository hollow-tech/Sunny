import styled from "styled-components";

export const Talbe = styled.div`
  inline-size: 100%;
  box-shadow: 0px 4px 25px rgba(121, 180, 250, 0.25);
`;

export const TalbeHead = styled.div`
  inline-size: 100%;
  display: flex;
  background: #2d62ea;
  border-radius: 10px 10px 0px 0px;
  min-block-size: 63px;
  padding: 22px 60px;
  @media ${({ theme }) => theme.device.laptopL} {
    padding: 15px 30px;
  }
`;

export const TalbeBody = styled.div`
  &::-webkit-scrollbar {
    inline-size: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00439f;
    border-radius: 40px;
  }
`;

export const TalbeRow = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  padding: 16px 60px;
  border-bottom: 1px solid #d1d1d1;
  background-color: ${({ bgColor, theme }) => bgColor || theme.white};
  &:last-child {
    border-bottom: none;
  }
`;

export const TableWrapperScroll = styled.div`
  overflow: auto;
  border-radius: 10px 10px 0px 0px;

  &::-webkit-scrollbar {
    block-size: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00439f;
    border-radius: 40px;
  }
`;
