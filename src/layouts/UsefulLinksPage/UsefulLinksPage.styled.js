import styled from "styled-components";

export const StyledUsefulLinksPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh - 90px + 1px);
  padding: 4rem 0 6.5rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};
  overflow: hidden;

  & > h2 {
    width: 100%;
    max-width: min(76vw, 1485px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3.75rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 74px + 1px);
  }

  @media screen and (max-width: 1536px) {
    & > h2 {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
    & > h2 {
      font-size: 2.4rem;
      margin-bottom: 2.75rem;
    }
  }
`;
