import styled from "styled-components";

export const StyledThemeSwitcher = styled.div`
  display: flex;
  flex-direction: row;

  button {
    display: grid;
    place-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button:hover,
  button:focus-visible {
    filter: brightness(80%);
  }

  button:active {
    filter: brightness(65%);
  }

  svg {
    color: white;
    min-width: 22px;
    height: auto;
  }

  @media screen and (max-width: 1536px) {
    svg {
      min-width: 20px;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
