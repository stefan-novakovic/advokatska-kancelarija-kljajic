import styled from "styled-components";

export const StyledContactUsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh - 96px + 1px);
  padding: 5rem 0 8rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};

  h2 {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 4.5rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
  }

  form {
    width: 100%;
  }

  form > div,
  form > textarea {
    width: 100%;
    max-width: 600px;
  }

  form > div:first-of-type {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  form > div:first-of-type > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  form > div:first-of-type > div:last-child {
    width: 56%;
  }

  form > button {
    font-size: 1.5rem;
    font-family: inherit;
    padding: 0.5rem 1.75rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.veryLightBlue};
    color: ${({ theme }) => theme.colors.darkNavy};
    border: 2px solid ${({ theme }) => theme.colors.veryLightBlue};
  }

  form > button:hover,
  form > button:focus-visible {
    filter: brightness(105%);
  }

  form > button:active {
    color: ${({ theme }) => theme.colors.veryLightBlue};
    background-color: ${({ theme }) => theme.colors.darkNavy};
  }

  form p {
    font-weight: 400;
    line-height: 2.25;
    height: 36px;
    margin-bottom: 0.25rem;
  }

  @media screen and (max-width: 1536px) {
    h2,
    & > div {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 1279px) {
    form > div:first-of-type {
      flex-direction: column;
      gap: 0;
    }

    form > div:first-of-type > div:last-child {
      width: auto;
      flex-grow: 1;
    }
  }

  @media screen and (max-width: 1138px) {
    & > div {
      gap: 8rem;
    }
  }

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 82px + 1px);

    & > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 7rem;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    form > div,
    form > textarea {
      max-width: none;
    }

    form p {
      width: 100%;
    }
  }
`;
