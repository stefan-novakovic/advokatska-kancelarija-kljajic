import styled from "styled-components";

export const StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer = styled.div`
  & > h3 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  & > h4 {
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 1.25px;
    margin-bottom: 3.25rem;
  }

  & > a:any-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.75px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-decoration: none;
    margin-bottom: 1.5rem;
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

  @media screen and (max-width: 767px) {
    & > h3 {
      font-size: 3rem;
      letter-spacing: 1.5px;
    }

    & > h4 {
      font-size: 1.4rem;
      letter-spacing: 0.5px;
      margin-bottom: 2rem;
    }

    & > a:any-link {
      font-size: 1.15rem;
      letter-spacing: 0.25px;
      margin-bottom: 1.25rem;
      word-break: break-all;
    }

    & > a:any-link:last-child {
      margin-bottom: 0;
    }

    & > a:any-link svg {
      min-width: 20px;
      max-width: 20px;
      margin-right: 0.45rem;
    }
  }

  @media screen and (max-width: 374px) {
    & > h3 {
      font-size: 2.5rem;
      letter-spacing: 1.5px;
    }

    & > h4 {
      font-size: 1.25rem;
    }

    & > a:any-link {
      font-size: 0.995rem;
      letter-spacing: 0.15px;
    }

    & > a:any-link svg {
      min-width: 16px;
      max-width: 16px;
      margin-right: 0.375rem;
    }
  }
`;
