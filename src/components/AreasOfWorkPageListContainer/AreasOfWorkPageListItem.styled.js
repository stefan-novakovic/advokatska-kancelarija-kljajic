import styled from "styled-components";

export const StyledAreasOfWorkPageListItem = styled.li`
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    max-width: min(76vw, 1500px);
    height: 64px;
    margin-inline: auto;
    margin-bottom: 1.85rem;
  }

  & > div > h3 {
    margin-left: 1.25rem;
    font-size: 2rem;
    font-weight: 700;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > p {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.75px;
    line-height: 1.2;
    margin-bottom: 4.25rem;
  }

  &:last-child > p {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1536px) {
    & > div {
      max-width: 88vw;
    }

    & > p {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
    & > p {
      margin-bottom: 3.35rem;
    }
  }

  @media screen and (max-width: 520px) {
    & > div > h3 {
      margin-left: 0.75rem;
      font-size: 1.7rem;
      font-weight: 700;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    & > p {
      font-size: 1.25rem;
    }
  }
`;
