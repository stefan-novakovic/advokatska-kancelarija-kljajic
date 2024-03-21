import styled from "styled-components";

export const StyledAboutUsStaffDetailsPage = styled.div`
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
    max-width: 435px;
    aspect-ratio: 435/555.22;
    height: auto;
    border-radius: 3px;
    background-color: rgba(242, 246, 249, 0.06);
  }

  & > section:first-of-type > div:first-child img {
    border-radius: 3px;
  }

  section:first-of-type > div:last-child > h3 {
    font-size: 4.25rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  section:first-of-type > div:last-child > h4 {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.25px;
    margin-bottom: 2.5rem;
  }

  section:first-of-type > div:last-child > a:any-link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    text-decoration: none;
    margin-bottom: 1.35rem;
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
    min-width: 28px;
    max-width: 28px;
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
    min-height: calc(100vh - 82px + 1px);

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
`;
