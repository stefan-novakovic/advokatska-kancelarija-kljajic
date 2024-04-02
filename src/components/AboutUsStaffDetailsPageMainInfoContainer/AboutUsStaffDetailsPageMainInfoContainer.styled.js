import styled from "styled-components";

export const StyledAboutUsStaffDetailsPageMainInfoContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7rem;
  width: 100%;
  max-width: min(76vw, 1500px);
  margin-inline: auto;
  margin-bottom: 6rem;

  @media screen and (max-width: 1536px) {
    max-width: 88vw;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3.75rem;
    margin-bottom: 3.75rem;
  }

  @media screen and (max-width: 767px) {
    gap: 3.5rem;
    margin-bottom: 3.5rem;
  }
`;
