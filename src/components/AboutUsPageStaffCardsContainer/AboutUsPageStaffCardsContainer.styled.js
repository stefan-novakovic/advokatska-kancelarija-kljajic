import styled from "styled-components";

export const StyledAboutUsPageStaffCardsContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  & > a:any-link {
    width: 100%;
    max-width: 375px;
    min-height: 767px;
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
`;
