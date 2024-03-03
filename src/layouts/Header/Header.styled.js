import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25rem 4rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  z-index: 1;
  box-shadow: 0px -20px 50px ${({ theme }) => theme.colors.black};

  & > a {
    border-radius: 50%;
  }

  a:hover,
  a:focus-visible {
    filter: brightness(70%);
  }

  a:active {
    filter: brightness(60%);
  }

  img {
    width: 64px;
    height: auto;
    border-radius: 50%;
  }

  @media screen and (max-width: 1439px) {
    padding: 1.375rem 2rem;

    img {
      width: 60px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 1rem 1.5rem;

    img {
      width: 50px;
    }
  }
`;
