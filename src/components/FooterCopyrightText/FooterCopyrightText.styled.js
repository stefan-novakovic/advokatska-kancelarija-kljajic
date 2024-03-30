import styled from "styled-components";

export const StyledFooterCopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.veryLightBlue};
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;

  & > span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1023px) {
    font-size: 0.95rem;
  }
`;
