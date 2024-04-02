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

  & > p {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.5px;
    margin-bottom: 5rem;
  }

  & > a:any-link {
    display: block;
    width: fit-content;
    margin-inline: auto;
    text-decoration: none;
    font-family: inherit;
    font-size: 1.7rem;
    font-weight: 600;
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

    & > p {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 4.5rem 0;

    & > h2 {
      font-size: 2.4rem;
    }

    & > p {
      font-size: 1.2rem;
      margin-bottom: 4.75rem;
    }

    & > a:any-link {
      font-size: 1.4rem;
    }
  }
`;
