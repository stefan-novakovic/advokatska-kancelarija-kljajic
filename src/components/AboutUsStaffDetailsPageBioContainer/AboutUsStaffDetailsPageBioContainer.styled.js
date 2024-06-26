import styled from "styled-components";

export const StyledAboutUsStaffDetailsPageBioContainer = styled.section`
  width: 100%;
  max-width: min(76vw, 1485px);
  margin-inline: auto;

  & > h3 {
    font-size: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.75px;
    margin-bottom: 2.5rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
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
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.75px;
      margin-bottom: 2.5rem;
    }

    & > p {
      font-size: 1.2rem;
      line-height: 1.35;
    }
  }
`;
