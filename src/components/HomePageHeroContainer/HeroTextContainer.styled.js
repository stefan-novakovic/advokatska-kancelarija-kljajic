import styled from "styled-components";

export const StyledHeroTextContainer = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  inset: 0;

  & > h1,
  & > h2 {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-align: center;
    text-shadow: -3px 3px 5px ${({ theme }) => theme.colors.black};
    opacity: 0;
    animation-duration: 1.4s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-direction: forwards;
    animation-iteration-count: 1;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > h1 {
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: 1.25px;
    margin-inline: 5rem;
    animation-name: slide;
  }

  & > h2 {
    font-size: 8.5rem;
    font-weight: 700;
    letter-spacing: 3.5px;
    line-height: 1.55;
    animation-name: slideReverse;
  }

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(-12px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes slideReverse {
    0% {
      opacity: 0;
      transform: translateY(12px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 1536px) {
    & > h1 {
      font-size: 4.15rem;
    }

    & > h2 {
      font-size: 7.5rem;
    }
  }

  @media screen and (max-width: 1213px) {
    & > h1 {
      white-space: normal;
    }
  }

  @media screen and (max-width: 767px) {
    & > h1,
    & > h2 {
      font-size: 9.5vw;
      letter-spacing: 0.75px;
    }

    & > h1 {
      margin-inline: 0;
    }

    & > h2 {
      font-size: 19vw;
      letter-spacing: 2.5px;
    }
  }

  @media screen and (max-width: 950px) and (orientation: landscape) {
    & > h1,
    & > h2 {
      font-size: 6vw;
    }

    & > h2 {
      font-size: 12vw;
    }
  }
`;
