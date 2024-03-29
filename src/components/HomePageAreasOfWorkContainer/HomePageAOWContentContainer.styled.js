import styled from "styled-components";

export const StyledHomePageAOWContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 4.25rem;
  padding-inline: 3rem;

  @media screen and (max-width: 1279px) {
    gap: 3.75rem;
  }

  @media screen and (max-width: 500px) {
    gap: 3rem;
  }
`;
