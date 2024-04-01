import styled from "styled-components";

export const StyledAboutUsStaffDetailsPageBioContainer = styled.section`
  width: 100%;
  max-width: min(76vw, 1500px);
  margin-inline: auto;

  & > h3 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.75px;
    margin-bottom: 2.5rem;
  }

  & > p {
    white-space: pre-wrap;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 1536px) {
    max-width: 88vw;
  }

  @media screen and (max-width: 500px) {
    & > h3 {
      font-size: 1.85rem;
      font-weight: 500;
      letter-spacing: 0.75px;
      margin-bottom: 2.5rem;
    }

    & > p {
      font-size: 1.175rem;
      line-height: 1.35;
      letter-spacing: 0.35px;
    }
  }
`;
