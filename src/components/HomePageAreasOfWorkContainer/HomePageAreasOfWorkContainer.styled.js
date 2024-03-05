import styled from "styled-components";

export const HomePageAreasOfWorkContainer = styled.div`
  width: 100%;
  padding: 6rem 0 10rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};
  border-bottom: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  h3 {
    width: 76vw;
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
    gap: 4.5rem;
    padding-inline: 3rem;
  }

  div div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 2.4rem;
  }

  div div p {
    font-size: 1.25rem;
  }

  div div div {
    height: 188px;
  }

  div div div img {
    width: 180px;
    height: auto;
    transition: ease 0.75s;
  }

  div div div img:hover {
    transform: scale(1.15);
    transition: ease 0.75s;
  }

  @media screen and (max-width: 1536px) {
    h3 {
      width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 6rem 0;
  }
`;
