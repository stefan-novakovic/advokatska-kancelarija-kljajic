import styled from "styled-components";

export const StyledContactUsPageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  width: 100%;
  max-width: min(76vw, 1500px);
  margin-inline: auto;

  @media screen and (max-width: 1536px) {
    max-width: 88vw;
  }

  @media screen and (max-width: 1138px) {
    gap: 8rem;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
  }
`;
