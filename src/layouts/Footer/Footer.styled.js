import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  z-index: 1;
  border-top: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  & > p {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 600;
    text-align: center;
  }

  span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1023px) {
    padding: 1.325rem 2rem;

    & > p {
      font-size: 0.95rem;
    }
  }
`;
