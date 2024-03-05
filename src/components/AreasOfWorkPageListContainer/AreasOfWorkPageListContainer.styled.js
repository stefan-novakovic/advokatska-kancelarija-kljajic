import styled from "styled-components";

const AreasOfWorkPageListContainer = styled.ul`
  width: 100%;
  color: ${({ theme }) => theme.colors.veryLightBlue};

  h3 {
    width: 76vw;
    margin-inline: auto;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.75rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  p {
    width: 100%;
    max-width: 76vw;
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
    h3 {
      width: 88vw;
    }

    p {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 520px) {
    p {
      font-size: 1.25rem;
    }
  }
`;

export default AreasOfWorkPageListContainer;