import styled from "styled-components";

export const StyledAboutUsPageCardsTextContainer = styled.div`
  padding: 1.75rem 1.5rem;

  & > h3 {
    font-size: 1.625rem;
    margin-bottom: 0.75rem;
  }

  & > h4 {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
  }

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    font-weight: 400;
  }

  & > div > svg {
    width: 16px;
    min-width: 16px;
    height: auto;
    margin-right: 0.55rem;
  }

  & > p {
    margin-top: 0.75rem;
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.12px;
    line-height: 1.3;
  }

  @media screen and (max-width: 413px) {
    & > div > svg {
      width: 14px;
      min-width: 14px;
      height: auto;
      margin-right: 0.375rem;
    }

    & > div {
      font-size: 0.995rem;
    }
  }

  @media screen and (max-width: 374px) {
    & > div {
      font-size: 0.975rem;
    }

    & > p {
      font-size: 1.05rem;
    }

    & > div > svg {
      display: none;
    }
  }

  @media screen and (max-width: 349px) {
    & > div {
      font-size: 0.915rem;
    }
  }
`;
