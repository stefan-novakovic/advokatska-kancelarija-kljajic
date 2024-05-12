import styled from "styled-components";

export const StyledAboutUsPageStaffCardsContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  max-width: 1756px !important;
  padding-inline: 68px !important;

  & > a:any-link {
    width: 100%;
    max-width: 375px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    background-color: rgba(242, 246, 249, 0.03);
    border-radius: 10px;
    box-shadow: 0 0 15px -1px ${({ theme }) => theme.colors.black};
    transition: 0.325s;
    filter: invert(4%);
  }

  & > a:any-link:last-of-type {
    justify-self: flex-start;
  }

  & > a:hover,
  & > a:focus-visible {
    box-shadow: 0 0 25px 1px ${({ theme }) => theme.colors.black};
    filter: invert(0);
  }

  & > a:active {
    filter: brightness(92%);
  }

  @media screen and (max-width: 1536px) {
    max-width: 88vw !important;
    padding-inline: 0 !important;
  }
`;
