import styled from "styled-components";

export const StyledAboutUsStaffDetailsPage = styled.div`
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

  h2 {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3.75rem;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  & > section:first-of-type {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7rem;
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    margin-bottom: 6rem;
  }

  & > section:first-of-type > div:first-child {
    display: flex;
    width: 100%;
    max-width: 460px;
    aspect-ratio: 460/587.13;
    height: auto;
    border-radius: 4px;
    background-color: rgba(242, 246, 249, 0.06);
  }

  & > section:first-of-type > div:first-child img {
    border-radius: 4px;
  }

  section:first-of-type > div:last-child > h3 {
    font-size: 4.1rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  section:first-of-type > div:last-child > h4 {
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 2.5rem;
  }

  section:first-of-type > div:last-child > a:any-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-decoration: none;
    margin-bottom: 1.35rem;
  }

  section:first-of-type > div:last-child > a:hover,
  section:first-of-type > div:last-child > a:focus-visible,
  section:first-of-type > div:last-child > a:hover svg,
  section:first-of-type > div:last-child > a:focus-visible svg {
    filter: brightness(85%);
  }

  section:first-of-type > div:last-child > a:active,
  section:first-of-type > div:last-child > a:active svg path {
    filter: brightness(75%);
  }

  section:first-of-type > div:last-child > a:any-link:last-child {
    margin-bottom: 0;
  }

  section:first-of-type > div:last-child > a:any-link span {
    white-space: nowrap;
  }

  section:first-of-type > div:last-child > a:any-link svg {
    width: 100%;
    height: auto;
    min-width: 26px;
    max-width: 26px;
    margin-right: 0.75rem;
  }

  section:last-of-type {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
  }

  section:last-of-type > h3 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.75px;
    margin-bottom: 2.5rem;
  }

  section:last-of-type > p {
    white-space: pre-wrap;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 74px + 1px);

    section:first-of-type > div:last-child > h3 {
      font-size: 3.85rem;
      letter-spacing: 1.5px;
    }

    & > section:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
    }
  }

  @media screen and (max-width: 1536px) {
    h2,
    section:first-of-type,
    section:last-of-type {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 500px) {
    & > section:first-of-type {
      gap: 3.5rem;
      margin-bottom: 3.5rem;
      align-items: flex-start;
    }

    section:first-of-type > div:last-child > h3 {
      font-size: 3.15rem;
      letter-spacing: 1.5px;
    }

    section:first-of-type > div:last-child > h4 {
      font-size: 1.5rem;
      letter-spacing: 0.5px;
      margin-bottom: 2rem;
    }

    section:first-of-type > div:last-child > a:any-link {
      font-size: 1.15rem;
      letter-spacing: 0.25px;
      margin-bottom: 1.25rem;
    }

    section:first-of-type > div:last-child > a:any-link:last-child {
      margin-bottom: 0;
    }

    section:first-of-type > div:last-child > a:any-link span {
      white-space: nowrap;
    }

    section:first-of-type > div:last-child > a:any-link svg {
      min-width: 20px;
      max-width: 20px;
      margin-right: 0.5rem;
    }

    section:last-of-type > h3 {
      font-size: 1.85rem;
      font-weight: 500;
      letter-spacing: 0.75px;
      margin-bottom: 2.5rem;
    }

    section:last-of-type > p {
      font-size: 1.175rem;
      line-height: 1.35;
      letter-spacing: 0.35px;
    }
  }

  @media screen and (max-width: 374px) {
    section:first-of-type > div:last-child > a:any-link svg {
      display: none;
    }
  }

  @media screen and (max-width: 349px) {
    section:first-of-type > div:last-child > a:any-link {
      font-size: 1.075rem;
    }
  }
`;
