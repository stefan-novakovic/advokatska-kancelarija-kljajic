import styled from "styled-components";

export const StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer = styled.div`
  & > h3 {
    font-size: 4.1rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  & > h4 {
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 2.5rem;
  }

  & > a:any-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-decoration: none;
    margin-bottom: 1.5rem;
    white-space: nowrap;
  }

  & > a:any-link:last-child {
    margin-bottom: 0;
  }

  & > a:hover,
  & > a:focus-visible,
  & > a:hover svg,
  & > a:focus-visible svg {
    filter: brightness(85%);
  }

  & > a:active,
  & > a:active svg path {
    filter: brightness(75%);
  }

  & > a:any-link svg {
    width: 100%;
    height: auto;
    min-width: 26px;
    max-width: 26px;
    margin-right: 0.85rem;
  }

  @media screen and (max-width: 1023px) {
    & > h3 {
      font-size: 3.85rem;
      letter-spacing: 1.5px;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 0;

    & > h3 {
      font-size: 2.85rem;
      letter-spacing: 1.5px;
    }

    & > h4 {
      font-size: 1.5rem;
      letter-spacing: 0.5px;
      margin-bottom: 2rem;
    }

    & > a:any-link {
      font-size: 1.15rem;
      letter-spacing: 0.25px;
      margin-bottom: 1.25rem;
    }

    & > a:any-link:last-child {
      margin-bottom: 0;
    }

    & > a:any-link svg {
      min-width: 20px;
      max-width: 20px;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 374px) {
    & > a:any-link svg {
      display: none;
    }
  }

  @media screen and (max-width: 349px) {
    & > a:any-link {
      font-size: 1.075rem;
    }
  }
`;
