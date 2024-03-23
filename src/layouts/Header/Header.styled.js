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

  & > a:hover,
  & > a:focus-visible {
    filter: brightness(80%);
  }

  & > a:active {
    filter: brightness(65%);
  }

  & > a > img {
    width: 68px;
    height: auto;
    border-radius: 50%;
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
  }
`;
