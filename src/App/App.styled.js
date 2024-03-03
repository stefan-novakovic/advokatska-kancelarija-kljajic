import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkNavy};
`;
