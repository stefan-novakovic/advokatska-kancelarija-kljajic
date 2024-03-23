import styled from "styled-components";

const StyledContactUsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-bottom: 73px;
  padding-right: 8rem;

  a:any-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-decoration: none;
    font-size: 1.2rem;
    letter-spacing: 0.75px;
    line-height: 1.32;
  }

  & > div:last-child {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    font-size: 1.2rem;
    letter-spacing: 0.75px;
  }

  svg {
    width: auto;
    height: 35px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    margin-right: 1rem;
  }

  a:hover,
  a:focus-visible,
  a:hover svg,
  a:focus-visible svg {
    filter: brightness(85%);
  }

  a:active,
  a:active svg path {
    filter: brightness(75%);
  }

  span {
    white-space: nowrap;
  }

  @media screen and (max-width: 1366px) {
    padding-right: 3rem;
  }

  @media screen and (max-width: 1023px) {
    padding-right: 0;
    padding-bottom: 0;

    span {
      white-space: normal;
    }
  }

  @media screen and (max-width: 450px) {
    a:any-link,
    & > div:last-child {
      font-size: 1.05rem;
    }

    svg {
      width: auto;
      height: 30px;
      margin-right: 0.75rem;
    }
  }
`;

export default StyledContactUsInfoContainer;
