import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  z-index: 1;
  box-shadow: 0px -18px 60px ${({ theme }) => theme.colors.black};

  p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.35;
    text-align: center;
    color: ${({ theme }) => theme.colors.veryLightBlue};
  }

  span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1023px) {
    padding: 0.85rem 2rem;

    p {
      font-size: 0.95rem;
    }
  }
`;
