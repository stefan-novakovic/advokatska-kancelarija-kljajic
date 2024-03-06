import styled from "styled-components";

const UsefulLinksListContainer = styled.ul`
  width: 100%;
  max-width: 76vw;
  margin-inline: auto;
  list-style-type: none;
  column-count: 2;
  column-gap: 15rem;

  li {
    margin-bottom: 2.5rem;
  }

  & > li:last-child {
    margin-bottom: 0;
  }

  a:any-link {
    font-size: 1.425rem;
    font-weight: 400;
    letter-spacing: 0.75px;
    line-height: 1.45;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
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
    max-width: 88vw;
  }

  @media screen and (max-width: 520px) {
    a:any-link {
      font-size: 1.25rem;
    }
  }
`;

export default UsefulLinksListContainer;
