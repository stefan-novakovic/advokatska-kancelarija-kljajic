import styled from "styled-components";

export const StyledHomePageAOWCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;

  & > p {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 767px) {
    & > p {
      font-size: 1.2rem;
    }
  }
`;
