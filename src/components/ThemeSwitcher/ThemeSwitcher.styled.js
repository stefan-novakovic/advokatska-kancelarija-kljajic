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
    filter: brightness(70%);
  }

  button:active {
    filter: brightness(60%);
  }

  svg {
    color: white;
    min-width: 22px;
    height: auto;
  }

  @media screen and (max-width: 1439px) {
    svg {
      min-width: 20px;
    }
  }
`;
