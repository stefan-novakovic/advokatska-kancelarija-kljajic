import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  a:any-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Neutral0};
  }
`;
