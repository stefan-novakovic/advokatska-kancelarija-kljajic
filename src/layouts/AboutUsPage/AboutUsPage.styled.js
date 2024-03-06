import styled from "styled-components";

export const StyledAboutUsPage = styled.div`
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

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 82px + 1px);
  }

  @media screen and (max-width: 1536px) {
    h2 {
      max-width: 88vw;
    }
  }
`;
