import styled from "styled-components";

export const StyledFirstAndLastNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  & > div:last-child {
    width: 60%;
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    gap: 0;

    & > div:last-child {
      width: 100%;
    }
  }
`;
