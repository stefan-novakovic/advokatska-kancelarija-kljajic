import styled from "styled-components";

export const StyledHeaderLanguageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: auto;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 0.25rem;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1536px) {
    width: 60px;
  }

  @media screen and (max-width: 1439px) {
    width: 55px;

    & > button {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
