import styled from "styled-components";

export const StyledHomePage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh - 90px + 1px);
  overflow: hidden;

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 74px + 1px);
  }
`;
