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
    color: ${({ theme }) => theme.colors.veryLightBlue};
    background-color: transparent;
    border: none;
    letter-spacing: 0.75px;
    font-family: inherit;

    cursor: pointer;
  }

  & > div:last-of-type > button > p {
    font-size: 1.015rem;
    font-weight: 400;
    height: 14px;
  }

  & > div:last-of-type > button > img {
    max-height: 16px;
    width: auto;
    margin-left: 5px;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.colors.veryLightBlue};
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

    & > div:last-of-type > button > p {
      font-size: 1rem;
    }

    & > div:last-of-type > button > img {
      max-height: 15px;
      margin-left: 4px;
    }
  }

  @media screen and (max-width: 1439px) {
    padding: 1.0945rem 2rem;

    & > a > img,
    & > div:last-of-type {
      width: 55px;
    }

    & > div:last-of-type > button > p {
      font-size: 0.95rem;
    }

    & > div:last-of-type > button > img {
      max-height: 14px;
      margin-left: 4px;
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
      height: 100vh !important;
      touch-action: none;
    }

    .menu-wrap {
      display: block;
      touch-action: none;
      background-color: ${({ theme }) => theme.colors.darkNavy};
      color: ${({ theme }) => theme.colors.veryLightBlue};
      font-size: 1.225rem;
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

    .menu-wrap .menu div span a {
      display: block;
      padding: 0.55rem 1.85rem 0.55rem 0;
      border-right: 3px solid transparent;
    }

    .menu-wrap .menu div span a.selected {
      border-right: 3px solid ${({ theme }) => theme.colors.veryLightBlue};
    }
  }
`;
