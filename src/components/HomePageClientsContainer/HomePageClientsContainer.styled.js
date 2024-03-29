import styled from "styled-components";

export const StyledHomePageClientsContainer = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  color: ${({ theme }) => theme.colors.darkNavy};

  @media screen and (max-width: 767px) {
    padding: 5rem 3.5rem;
  }
`;
