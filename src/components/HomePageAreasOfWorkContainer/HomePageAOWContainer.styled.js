import styled from "styled-components";

export const StyledHomePageAOWContainer = styled.div`
  width: 100%;
  padding: 6rem 0 10rem;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  color: ${({ theme }) => theme.colors.veryLightBlue};
  border-bottom: 10px double ${({ theme }) => theme.colors.veryLightBlue};

  & > h3 {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.25rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @media screen and (max-width: 1536px) {
    & > h3 {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 4.5rem 0;

    & > h3 {
      font-size: 2.4rem;
    }
  }
`;
