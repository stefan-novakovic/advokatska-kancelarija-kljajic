import styled from "styled-components";

export const StyledInfoLink = styled.a`
  &:any-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 342px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 0.75px;
    line-height: 1.32;
  }

  & > svg {
    width: auto;
    height: 35px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    margin-right: 1rem;
  }

  &:hover,
  &:focus-visible,
  &:hover svg,
  &:focus-visible svg {
    filter: brightness(85%);
  }

  &:active,
  &:active svg path {
    filter: brightness(75%);
  }

  & > span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1023px) {
    & > span {
      white-space: normal;
    }
  }

  @media screen and (max-width: 450px) {
    &:any-link {
      font-size: 1.05rem;
      min-width: auto;
    }

    & > svg {
      width: auto;
      height: 30px;
      margin-right: 0.75rem;
    }
  }
`;
