import styled from "styled-components";

export const StyledUsefulLinksListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: min(73.1vw, 1366px);
  margin-inline: auto;
  list-style-type: none;

  @media screen and (max-width: 1536px) {
    max-width: 85vw;
  }

  @media screen and (max-width: 1365px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 88vw;
    gap: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    gap: 1.55rem;
  }
`;
