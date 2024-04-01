import styled from "styled-components";

export const StyledContactUsPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding-bottom: 73px;
  padding-right: 8rem;

  @media screen and (max-width: 1366px) {
    padding-right: 4rem;
  }

  @media screen and (max-width: 1023px) {
    padding-right: 0;
    padding-bottom: 0;
  }
`;
