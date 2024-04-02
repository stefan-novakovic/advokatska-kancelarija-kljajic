import styled from "styled-components";

export const StyledNavListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  list-style-type: none;
  font-size: 1.25rem;
  font-weight: 600;
  padding-inline: 3rem;

  & > li {
    min-width: 90px;
    text-align: center;
  }

  & > li > a:any-link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    padding: 0.45rem 0.02rem;
    border-bottom: 2px solid transparent;
  }

  & > li > a:not(.selected):hover,
  & > li > a:not(.selected):focus-visible {
    border-bottom: 3px solid rgba(242, 246, 249, 0.9);
    filter: brightness(80%);
  }

  & > li > a:not(.selected):active {
    filter: brightness(65%);
  }

  & > li > a.selected {
    pointer-events: none;
    cursor: default;
    border-bottom: 3px solid rgba(242, 246, 249, 0.95) !important;
  }

  & > li > a.selected_ausdp {
    border-bottom: 3px solid rgba(242, 246, 249, 0.95) !important;
  }

  @media screen and (max-width: 1439px) {
    gap: 1.5rem;
    padding-inline: 2.5rem;
    font-size: 1.1rem;

    & > li {
      min-width: auto;
      line-height: 1.15;
    }
  }

  @media screen and (max-width: 1151px) {
    font-size: 1.05rem;
  }
`;
