import styled from "styled-components";

const HeroTextWrapperContainer = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    text-shadow: -3px 3px 5px ${({ theme }) => theme.colors.black};
    letter-spacing: 1.25px;
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

  h1 {
    white-space: nowrap;
    animation-name: slide;
  }

  h2 {
    font-weight: 700;
    font-size: 8.25rem;
    letter-spacing: 3.5px;
    animation-name: slideReverse;
    overflow: visible;
    line-height: 1.55;
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

  @media screen and (max-width: 1213px) {
    h1 {
      white-space: normal;
    }
  }

  @media screen and (max-width: 767px) {
    h1,
    h2 {
      color: ${({ theme }) => theme.colors.veryLightBlue};
      font-size: 10vw;
      letter-spacing: 0.75px;
    }

    h2 {
      font-size: 20vw;
      letter-spacing: 2.5px;
    }
  }
`;

export default HeroTextWrapperContainer;
