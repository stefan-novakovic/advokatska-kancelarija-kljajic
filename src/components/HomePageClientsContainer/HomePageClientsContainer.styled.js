import styled from "styled-components";

export const HomePageClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.75rem 3rem;
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
  }

  img {
    max-height: 168px;
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
`;
