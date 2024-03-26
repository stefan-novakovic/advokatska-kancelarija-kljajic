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

  & > a {
    border-radius: 50%;
  }

  & > a > img,
  & > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: auto;
    border-radius: 50%;
  }

  & > div:last-of-type > button {
    display: flex;
    justify-content: center;
    align-items: center;
    /* color: ${({ theme }) => theme.colors.darkNavy}; */
    color: ${({ theme }) => theme.colors.veryLightBlue};
    /* background-color: ${({ theme }) => theme.colors.veryLightBlue}; */
    background-color: transparent;
    border: none;
    /* border-radius: 4px; */
    letter-spacing: 1px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    /* min-width: 45.2px; */
    cursor: pointer;
    /* padding: 0.3rem 0.2595rem 0.0525rem; */
    padding: 0.25rem;
  }

  & > div:first-of-type {
    display: none;
  }

  // Sidebar menu styles
  .overlay,
  .menu-wrap {
    display: none;
  }

  @media screen and (max-width: 1536px) {
    padding: 0.9375rem 2rem;

    & > a > img,
    & > div:last-of-type {
      width: 60px;
    }
  }

  @media screen and (max-width: 1439px) {
    padding: 1.0945rem 2rem;

    & > a > img,
    & > div:last-of-type {
      width: 55px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 0.75rem 1.5rem;

    & > a > img {
      width: 50px;
    }

    & > div:first-of-type {
      display: block;
    }

    & > div:last-of-type {
      display: none;
    }

    // Sidebar menu styles
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
      background-color: ${({ theme }) => theme.colors.darkNavy};
      color: ${({ theme }) => theme.colors.veryLightBlue};
      font-size: 1.2rem;
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
      border-right: 3px solid ${({ theme }) => theme.colors.veryLightBlue};
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
