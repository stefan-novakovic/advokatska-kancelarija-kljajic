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

  section:first-of-type {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5.8vw;
    margin-bottom: 2rem;
  }

  section:first-of-type > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  section:first-of-type > div:last-child {
    width: 100%;
    min-width: 535px;
    max-width: 535px;
    min-height: 405px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border: 7px double ${({ theme }) => theme.colors.veryLightBlue};
    border-radius: 4px;
  }

  section:first-of-type > div:last-child img {
    border-radius: 4px;
  }

  section:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 5rem;
  }

  section:nth-of-type(3) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
  }

  section:nth-of-type(3) a:any-link {
    width: 100%;
    max-width: 375px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    background-color: rgba(242, 246, 249, 0.03);
    border-radius: 10px;
    box-shadow: 0 0 15px -1px ${({ theme }) => theme.colors.black};
    transition: 0.325s;
  }

  section:nth-of-type(3) a:any-link > div {
    padding: 1.75rem 1.5rem;
  }

  section:nth-of-type(3) a:any-link > div h3 {
    font-size: 1.625rem;
    margin-bottom: 0.75rem;
  }

  section:nth-of-type(3) a:any-link > div h4 {
    font-size: 1.025rem;
    margin-bottom: 1.1rem;
  }

  section:nth-of-type(3) a:any-link > div div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  section:nth-of-type(3) a:any-link > div div svg {
    width: 16px;
    min-width: 16px;
    height: auto;
    margin-right: 0.55rem;
  }

  section:nth-of-type(3) a:any-link > div p {
    margin-top: 0.75rem;
    font-size: 1.125rem;
    letter-spacing: 0.12px;
    line-height: 1.3;
  }

  section:nth-of-type(3) a:any-link img {
    border-radius: 10px 10px 0 0;
    box-shadow: 0 3px 4px -3px ${({ theme }) => theme.colors.black};
  }

  section:nth-of-type(3) a:hover,
  section:nth-of-type(3) a:focus-visible {
    box-shadow: 0 0 25px 1px ${({ theme }) => theme.colors.black};
  }

  @media screen and (max-width: 413px) {
    section:nth-of-type(3) a:any-link > div div svg {
      width: 14px;
      min-width: 14px;
      height: auto;
      margin-right: 0.375rem;
    }

    section:nth-of-type(3) a:any-link > div div {
      font-size: 0.995rem;
    }
  }

  @media screen and (max-width: 374px) {
    section:nth-of-type(3) a:any-link > div div svg {
      display: none;
    }

    section:nth-of-type(3) a:any-link > div div {
      font-size: 0.975rem;
    }
  }

  @media screen and (max-width: 349px) {
    section:nth-of-type(3) a:any-link > div div {
      font-size: 0.89rem;
      word-break: break-all;
    }
  }

  @media screen and (max-width: 620px) {
    section:first-of-type > div:last-child {
      width: 100%;
      min-width: 281px;
      max-width: 535px;
      min-height: 201px;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      border: 7px double ${({ theme }) => theme.colors.veryLightBlue};
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 82px + 1px);
  }

  @media screen and (max-width: 1536px) {
    h2,
    section:first-of-type,
    section:nth-of-type(2),
    section:nth-of-type(3) {
      max-width: 88vw;
    }
  }

  @media screen and (max-width: 1762px) {
    section:first-of-type {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;
      margin-bottom: 3.5rem;
    }
  }
`;
