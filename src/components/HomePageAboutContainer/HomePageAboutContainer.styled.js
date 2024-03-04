import styled from "styled-components";

export const HomePageAboutContainer = styled.div`
  width: 100%;
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};

  border-top: 10px double ${({ theme }) => theme.colors.veryLightBlue};
  border-bottom: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  h2 {
    width: 75vw;
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.25rem;
  }
  p {
    width: 75vw;
    min-height: 145px;
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

  @media screen and (max-width: 767px) {
    padding: 6rem 3rem;

    p {
      line-height: normal;
    }
  }

  @media screen and (max-width: 520px) {
    padding: 6rem 2rem;
  }
`;
