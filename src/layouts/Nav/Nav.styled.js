import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    list-style-type: none;
    font-size: 1.25rem;
    font-weight: 600;
    padding-inline: 3rem;
  }

  li {
    min-width: 125px;
    text-align: center;
  }

  a:any-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    padding: 0.375rem 0;
    border-bottom: 2px solid transparent;
  }

  @media screen and (max-width: 1439px) {
    ul {
      gap: 0.5rem;
      padding-inline: 2.5rem;
      font-size: 1.1rem;
    }

    li {
      min-width: 104px;
      line-height: 1.15;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
