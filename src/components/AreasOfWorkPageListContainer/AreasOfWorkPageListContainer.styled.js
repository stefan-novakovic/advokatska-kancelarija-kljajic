import styled from "styled-components";

const AreasOfWorkPageListContainer = styled.ul`
  width: 100%;
  color: ${({ theme }) => theme.colors.veryLightBlue};
  list-style-type: none;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: min(76vw, 1500px);
    height: 64px;
    margin-inline: auto;
    margin-bottom: 1.75rem;
  }

  div span,
  div span img {
    width: 50px;
    height: auto;
  }

  li:last-child div span img {
    height: 64px;
    width: 40px;
    margin-inline: auto;
  }

  div h3 {
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: 700;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  p {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.75px;
    line-height: 1.2;
    margin-bottom: 5rem;
  }

  & > li:last-child p {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1536px) {
    div {
      max-width: 88vw;
    }

    p {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 520px) {
    p {
      font-size: 1.25rem;
    }
  }
`;

export default AreasOfWorkPageListContainer;
