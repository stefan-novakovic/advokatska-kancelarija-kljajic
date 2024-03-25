import styled from "styled-components";

const UsefulLinksListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: min(73.1vw, 1366px);
  margin-inline: auto;
  list-style-type: none;

  li {
    margin-bottom: 2.2rem;
  }

  & li:last-child {
    margin-bottom: 0;
  }

  a:any-link {
    font-size: 1.425rem;
    font-weight: 400;
    letter-spacing: 0.9px;
    line-height: 1.45;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    white-space: wrap;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
    filter: brightness(85%);
  }

  a:active {
    filter: brightness(72%);
  }

  @media screen and (max-width: 1536px) {
    max-width: 85.1vw;
  }

  @media screen and (max-width: 1365px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 88vw;
    gap: 2.5rem;
  }
  @media screen and (max-width: 767px) {
    a:any-link {
      font-size: 1.3rem;
    }

    li {
      margin-bottom: 1.55rem;
    }
  }
`;

export default UsefulLinksListContainer;
