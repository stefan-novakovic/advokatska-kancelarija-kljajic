import styled from "styled-components";

export const StyledHomePageClientsContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 3.25rem;

  @media screen and (max-width: 612px) {
    flex-flow: column nowrap;
    gap: 2.85rem;
  }
`;
