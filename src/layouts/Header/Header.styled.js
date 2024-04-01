import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.7195rem 4rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  z-index: 5;
  box-shadow: 0 -1px 10px 0px ${({ theme }) => theme.colors.black};

  // MUI Sidebar styles
  .overlay,
  .menu-wrap {
    display: none;
  }

  @media screen and (max-width: 1536px) {
    padding: 0.9375rem 2rem;
  }

  @media screen and (max-width: 1439px) {
    padding: 1.0945rem 2rem;
  }

  @media screen and (max-width: 1023px) {
    padding: 0.75rem 1.5rem;

    // MUI Sidebar styles
    .overlay {
      display: block;
      height: 100lvh !important;
      /* touch-action: none; */
    }

    .menu-wrap {
      display: block;
      height: 100lvh !important;
      /* touch-action: none; */
      overflow-y: scroll;
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.darkNavy};
      color: ${({ theme }) => theme.colors.veryLightBlue};
      position: fixed;
    }

    .menu-wrap .head {
      padding: 1.2rem 1.9rem 1.1767rem 1rem;
    }

    .menu-wrap .head .close {
      display: flex;
      background-color: transparent;
    }

    .menu-wrap .head .close svg {
      width: 28px;
      height: auto;
    }

    .menu-wrap .menu {
      padding: calc(1.1767rem + 0.5rem) 0 calc(1.1767rem + 0.5rem);
      background-color: transparent;
    }

    .menu-wrap .menu div {
      padding: 0 0 0 1.85rem;
      background-color: transparent;
      margin-bottom: 0.85rem;
    }

    .menu-wrap .menu div:last-of-type {
      margin-bottom: 0;
    }

    .menu-wrap .menu div:last-of-type span {
      display: block;
    }

    .menu-wrap .menu div span a {
      display: block;
      padding: 0.55rem 1.85rem 0.55rem 0;
      border-right: 3px solid transparent;
    }

    .menu-wrap .menu div span a.selected {
      pointer-events: none;
      cursor: default;
      border-right: 3px solid ${({ theme }) => theme.colors.veryLightBlue} !important;
    }

    .menu-wrap .menu div span a.selected_ausdp {
      border-right: 3px solid ${({ theme }) => theme.colors.veryLightBlue} !important;
    }

    .menu-wrap .menu div:last-of-type span button {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.55rem 1.85rem 0.55rem 0;
      background-color: ${({ theme }) => theme.colors.darkNavy};
      color: ${({ theme }) => theme.colors.veryLightBlue};
      font-family: inherit;
      font-size: 1.2rem;
      border: none;
      cursor: pointer;
    }
  }
`;
