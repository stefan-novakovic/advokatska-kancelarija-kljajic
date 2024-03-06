import styled from "styled-components";

export const HomePageClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.veryLightBlue};
  color: ${({ theme }) => theme.colors.darkNavy};

  h4 {
    width: 100%;
    max-width: 76vw;
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 3.25rem;
    height: 170px;
  }

  img {
    max-height: 170px;
    width: auto;
    filter: sepia(0.15);
  }

  img:hover {
    filter: sepia(0);
  }

  @media screen and (max-width: 767px) {
    padding: 5rem 3.5rem;
  }

  @media screen and (max-width: 627px) {
    img {
      max-height: auto;
    }

    & div {
      flex-flow: column nowrap;
    }
  }

  @media screen and (max-width: 1369px) {
    & div {
      height: 283px;
    }
  }

  @media screen and (max-width: 1100px) {
    & div {
      height: 348px;
    }
  }

  @media screen and (max-width: 817px) {
    & div {
      height: 505px;
    }
  }

  @media screen and (max-width: 637px) {
    & div {
      flex-flow: column nowrap;
      height: 795px;
    }
  }

  @media screen and (max-width: 441px) {
    & div {
      height: 786px;
    }

    img {
      max-width: 262px;
    }
  }

  @media screen and (max-width: 374px) {
    & div {
      height: 780px;
    }

    img {
      max-width: 232px;
    }
  }
  @media screen and (max-width: 349px) {
    & div {
      height: 760px;
    }

    img {
      max-width: 207px;
    }
  }
`;
