import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1.75rem;
  background-color: ${({ theme }) => theme.colors.Neutral800};
  position: sticky;
  top: 0;
`;
