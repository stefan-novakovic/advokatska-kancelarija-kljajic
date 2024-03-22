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

  a:not(.selected):hover,
  a:not(.selected):focus-visible {
    color: rgb(255, 212, 0);
    filter: brightness(70%);
  }

  a:not(.selected):active {
    color: rgb(255, 212, 0);
    filter: brightness(60%);
  }

  & a.selected {
    pointer-events: none;
    cursor: default;
    color: rgb(255, 212, 0) !important;
  }

  img {
    width: 68px;
    height: auto;
    border-radius: 50%;
  }

  @media screen and (max-width: 1536px) {
    padding: 0.9375rem 2rem;

    img {
      width: 60px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 0.75rem 1.5rem;

    img {
      width: 50px;
    }
  }
`;
