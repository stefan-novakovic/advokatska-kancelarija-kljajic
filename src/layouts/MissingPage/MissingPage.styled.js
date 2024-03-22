import styled from "styled-components";

export const StyledMissingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh - 96px + 1px);
  padding: 4rem 0 6.5rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};

  h2 {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3.75rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  div {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
  }

  a:any-link {
    width: fit-content;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    font-size: 1.25rem;
    font-weight: 400;
  }

  a:hover,
  a:focus-visible {
    filter: brightness(85%);
  }

  a:active {
    filter: brightness(72%);
  }

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 82px + 1px);
  }

  @media screen and (max-width: 1536px) {
    h2,
    div {
      max-width: 88vw;
    }
  }
`;
