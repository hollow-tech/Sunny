import styled from "styled-components";

export const SelectStyled = styled.div`
  width: 100%;

  .select__control {
    block-size: 61px;
    border: 1px solid #646464;

    @media ${({ theme }) => theme.device.laptopL} {
      block-size: 49px;
    }
  }

  .select__value-container {
    padding: 0 22px;
  }

  .select__indicators {
    inline-size: 60px;
    @media ${({ theme }) => theme.device.laptopL} {
      inline-size: 49px;
    }
  }

  .select__single-value {
    font-size: 14px;
    line-height: 17px;
  }

  .select__menu {
    border: 1px solid #646464;
  }

  .select__option--is-selected {
    background-color: #2d62ea;
  }

  .select__option {
    min-block-size: 61px;
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 14px;
    line-height: 17px;

    @media ${({ theme }) => theme.device.laptopL} {
      min-block-size: 49px;
    }
  }

  .select__placeholder {
    font-size: 14px;
    line-height: 17px;
  }
`;
