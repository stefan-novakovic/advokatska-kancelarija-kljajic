import styled from "styled-components";

export const HomePageAreasOfWorkContainer = styled.div`
  width: 100%;
  padding: 6rem 0 10rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};
  border-bottom: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  h3 {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.25rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 4.25rem;
    padding-inline: 3rem;
    height: 248px;
  }

  div div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5rem;
  }

  div div p {
    font-size: 1.25rem;
  }

  div div div {
    height: 188px;
    transition: ease 0.65s;
  }

  div div div img {
    width: 180px;
    height: auto;
    min-height: 158px;
  }

  div div div:hover {
    transform: scale(1.1);
    transition: ease 0.65s;
  }

  @media screen and (max-width: 1536px) {
    h3 {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 755px) {
    padding: 6rem 0;
  }

  @media screen and (max-width: 1279px) {
    & > div {
      gap: 4.425rem;
      height: 567px;
    }
  }
  @media screen and (max-width: 840px) {
    & > div {
      height: 556px;
      gap: 3.75rem;
    }
  }
  @media screen and (max-width: 755px) {
    & > div {
      height: 864px;
    }
  }

  @media screen and (max-width: 515px) {
    & > div {
      height: 1480px;
    }
  }
`;
