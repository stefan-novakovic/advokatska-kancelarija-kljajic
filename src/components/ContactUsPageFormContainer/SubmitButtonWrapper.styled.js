import styled from "styled-components";

export const StyledSubmitButtonWrapper = styled.div`
  & > button {
    font-size: 1.5rem;
    font-family: inherit;
    padding: 0.5rem 1.75rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => theme.colors.veryLightBlue};
    color: ${({ theme }) => theme.colors.darkNavy};
    border: 2px solid ${({ theme }) => theme.colors.veryLightBlue};
    outline-color: ${({ theme }) => theme.colors.darkNavy};
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > button:disabled {
    background-color: rgba(245, 245, 245, 0.45);
    border: 2px solid rgba(245, 245, 245, 0.025);
  }

  & > button:not(:disabled):hover,
  & > button:not(:disabled):focus-visible {
    filter: brightness(85%);
    cursor: pointer;
  }

  & > button:not(:disabled):active {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    background-color: ${({ theme }) => theme.colors.darkNavy};
  }
`;
