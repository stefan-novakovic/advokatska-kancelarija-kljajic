import styled from "styled-components";

export const HomePageAboutContainer = styled.div`
  width: 100%;
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};

  border-top: 10px double ${({ theme }) => theme.colors.veryLightBlue};
  border-bottom: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  h2 {
    width: 100%;
    max-width: 76vw;
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.25rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > div {
    width: 100%;
    max-width: 76vw;
    min-height: 87px;
    margin-inline: auto;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.5px;
    transform: scaleY(1.04);
    margin-bottom: 4rem;
  }

  a:any-link {
    display: block;
    width: fit-content;
    margin-inline: auto;
    text-decoration: none;
    font-family: inherit;
    font-size: 1.75rem;
    padding: 0.65rem 1.2rem;
    border: 3px solid ${({ theme }) => theme.colors.veryLightBlue};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
  }

  a:hover,
  a:focus-visible {
    color: ${({ theme }) => theme.colors.darkNavy};
    background-color: ${({ theme }) => theme.colors.veryLightBlue};
  }

  a:active {
    filter: brightness(92%);
  }

  @media screen and (max-width: 1536px) {
    h2 {
      max-width: 88vw;
    }

    & > div {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 6rem 3rem;

    p {
      line-height: normal;
    }
  }

  @media screen and (max-width: 520px) {
    padding: 6rem 2rem;
    & > div {
      font-size: 1.25rem;
    }
  }

  // TYPEWRITER SPACE RESERVING QUERIES
  @media screen and (max-width: 2527px) {
    & > div {
      min-height: 116px;
    }
  }
  @media screen and (max-width: 1915px) {
    & > div {
      min-height: 144px;
    }
  }
  @media screen and (max-width: 1553px) {
    & > div {
      min-height: 173px;
    }
  }
  @media screen and (max-width: 1126px) {
    & > div {
      min-height: 202px;
    }
  }
  @media screen and (max-width: 985px) {
    & > div {
      min-height: 231px;
    }
  }
  @media screen and (max-width: 883px) {
    & > div {
      min-height: 260px;
    }
  }
  @media screen and (max-width: 785px) {
    & > div {
      min-height: 288px;
    }
  }
  @media screen and (max-width: 708px) {
    & > div {
      min-height: 317px;
    }
  }
  @media screen and (max-width: 645px) {
    & > div {
      min-height: 346px;
    }
  }
  @media screen and (max-width: 604px) {
    & > div {
      min-height: 375px;
    }
  }
  @media screen and (max-width: 577px) {
    & > div {
      min-height: 404px;
    }
  }
  @media screen and (max-width: 536px) {
    & > div {
      min-height: 432px;
    }
  }
  @media screen and (max-width: 371px) {
    & > div {
      min-height: 456px;
    }
  }
  @media screen and (max-width: 349px) {
    & > div {
      min-height: 480px;
    }
  }
  @media screen and (max-width: 333px) {
    & > div {
      min-height: 504px;
    }
  }
  @media screen and (max-width: 320px) {
    & > div {
      min-height: 528px;
    }
  }
`;
