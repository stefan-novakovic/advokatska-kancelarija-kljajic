import styled from "styled-components";

export const StyledAboutUsPageCardsTextContainer = styled.div`
  padding: 1.75rem 1.5rem;

  & > h3 {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  & > h4 {
    font-size: 1.025rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
  }

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1.15rem;
    font-weight: 400;
  }

  & > div:last-of-type {
    margin-bottom: 1.1rem;
  }

  & > div > svg {
    width: 16px;
    min-width: 16px;
    height: auto;
    margin-right: 0.5rem;
  }

  & > p {
    font-size: 1.15rem;
    font-weight: 400;
    letter-spacing: 0.12px;
    line-height: 1.25;
  }

  @media screen and (max-width: 767px) {
    & > h3 {
      font-size: 1.8rem;
    }

    & > h4 {
      font-size: 1rem;
    }

    & > div {
      font-size: 1.05rem;
    }

    & > div > svg {
      width: 13px;
      min-width: 13px;
      margin-right: 0.375rem;
    }

    & > p {
      font-size: 1.05rem;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 380px) {
    & > div {
      font-size: 0.93rem;
      word-break: break-all;
    }

    & > div > svg {
      width: 12px;
      min-width: 12px;
      margin-right: 0.25rem;
    }
  }
  @media screen and (max-width: 343px) {
    & > div {
      font-size: 0.825rem;
    }
  }
`;
