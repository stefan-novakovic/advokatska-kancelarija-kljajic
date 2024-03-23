import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.6875rem 4rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  z-index: 5;
  box-shadow: 0 -1px 10px 0px ${({ theme }) => theme.colors.black};

  & > a {
    border-radius: 50%;
  }

  & > a > img {
    width: 68px;
    height: auto;
    border-radius: 50%;
  }

  & > div:first-of-type {
    display: none;
  }

  .overlay,
  .menu-wrap {
    display: none;
  }

  @media screen and (max-width: 1536px) {
    padding: 0.9375rem 2rem;

    & > a > img {
      width: 60px;
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
      padding: 1.2rem 1.9rem 0.75rem 1rem;
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
      padding: 1rem 0 1.2rem;
      background-color: transparent;
    }
    .menu-wrap .menu a {
      display: block;
      border-right: 3px solid transparent;
      margin-bottom: 0.9rem;
    }

    .menu-wrap .menu a:last-of-type {
      margin-bottom: 0;
    }

    .menu-wrap .menu a.selected {
      border-right: 3px solid ${({ theme }) => theme.colors.veryLightBlue};
    }

    .menu-wrap .menu a > div {
      padding: 0.5rem 2rem;
    }
    .menu-wrap .menu a > div > span {
      display: block;
      height: 15px;
    }
  }
`;
