import styled from "styled-components";

export const StyledHomePageAboutUsContainer = styled.div`
  width: 100%;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};
  border-top: 10px double ${({ theme }) => theme.colors.veryLightBlue};
  border-bottom: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  & > h2 {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.25rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > span {
    display: block;
    width: 100%;
    max-width: min(76vw, 1500px);
    min-height: 87px;
    margin-inline: auto;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.5px;
    transform: scaleY(1.04);
    margin-bottom: 6rem;
  }

  & > a:any-link {
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

  & > a:hover,
  & > a:focus-visible {
    color: ${({ theme }) => theme.colors.darkNavy};
    background-color: ${({ theme }) => theme.colors.veryLightBlue};
  }

  & > a:active {
    filter: brightness(92%);
  }

  @media screen and (max-width: 1536px) {
    & > h2 {
      max-width: 88vw;
    }

    & > span {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 520px) {
    & > span {
      font-size: 1.25rem;
      margin-bottom: 4.75rem;
    }
  }

  // TYPEWRITER SPACE RESERVING QUERIES
  @media screen and (max-width: 2527px) {
    & > span {
      min-height: 116px;
    }
  }
  @media screen and (max-width: 1915px) {
    & > span {
      min-height: 144px;
    }
  }
  @media screen and (max-width: 1553px) {
    & > span {
      min-height: 173px;
    }
  }
  @media screen and (max-width: 1126px) {
    & > span {
      min-height: 202px;
    }
  }
  @media screen and (max-width: 985px) {
    & > span {
      min-height: 231px;
    }
  }
  @media screen and (max-width: 883px) {
    & > span {
      min-height: 260px;
    }
  }
  @media screen and (max-width: 785px) {
    & > span {
      min-height: 288px;
    }
  }
  @media screen and (max-width: 708px) {
    & > span {
      min-height: 317px;
    }
  }
  @media screen and (max-width: 645px) {
    & > span {
      min-height: 346px;
    }
  }
  @media screen and (max-width: 604px) {
    & > span {
      min-height: 375px;
    }
  }
  @media screen and (max-width: 577px) {
    & > span {
      min-height: 404px;
    }
  }
  @media screen and (max-width: 536px) {
    & > span {
      min-height: 432px;
    }
  }
  @media screen and (max-width: 520px) {
    & > span {
      min-height: 290px;
    }
  }
  @media screen and (max-width: 486px) {
    & > span {
      min-height: 312px;
    }
  }
  @media screen and (max-width: 459px) {
    & > span {
      min-height: 336px;
    }
  }
  @media screen and (max-width: 420px) {
    & > span {
      min-height: 360px;
    }
  }
  @media screen and (max-width: 397px) {
    & > span {
      min-height: 384px;
    }
  }
  @media screen and (max-width: 389px) {
    & > span {
      min-height: 408px;
    }
  }
  @media screen and (max-width: 371px) {
    & > span {
      min-height: 432px;
    }
  }
  @media screen and (max-width: 348px) {
    & > span {
      min-height: 456px;
    }
  }
  @media screen and (max-width: 324px) {
    & > span {
      min-height: 480px;
    }
  }
`;
