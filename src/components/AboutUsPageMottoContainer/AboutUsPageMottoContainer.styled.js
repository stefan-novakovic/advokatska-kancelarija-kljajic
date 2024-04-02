import styled from "styled-components";

export const StyledAboutUsPageMottoContainer = styled.section`
  margin-bottom: 4.5rem;

  & > h3 {
    font-size: 1.7rem;
    margin-bottom: 1.875rem;
  }

  & > p {
    font-size: 1.275rem;
    font-weight: 400;
    line-height: 1.47059;
    white-space: pre-wrap;
  }

  @media screen and (max-width: 1279px) {
    margin-bottom: 3.25rem;
  }

  @media screen and (max-width: 767px) {
    & > h3 {
      font-size: 1.5rem;
      margin-bottom: 1.45rem;
    }

    & > p {
      font-size: 1.2rem;
    }
  }
`;
