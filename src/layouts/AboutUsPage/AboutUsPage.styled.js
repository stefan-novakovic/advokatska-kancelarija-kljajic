import styled from "styled-components";
import placeholderImg from "../../assets/images/slika-1-o-nama-placeholder.jpg";

export const StyledAboutUsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh - 96px + 1px);
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

  section:first-of-type {
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4vw;
    margin-bottom: 3rem;
  }

  section:first-of-type > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1.65rem;
    font-size: 1.275rem;
    line-height: 1.4;
  }

  section:first-of-type > div:last-child {
    width: 100%;
    min-width: 535px;
    max-width: 535px;
    height: 402px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border: 3px solid ${({ theme }) => theme.colors.veryLightBlue};
    border-radius: 4px;
    background-image: url(${placeholderImg});
    background-size: cover;
  }

  section:first-of-type > div:last-child button:hover {
    background-color: rgba(242, 246, 249, 0.2);
  }

  section:first-of-type > div:last-child img {
    border-radius: 4px;
  }

  section:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    max-width: min(76vw, 1500px);
    margin-inline: auto;
    font-size: 1.275rem;
    line-height: 1.4;
    margin-bottom: 4.5rem;
  }

  section:nth-of-type(2) > p:first-of-type {
    margin-bottom: 1rem;
  }

  section:nth-of-type(2) > h3 {
    font-size: 1.6rem;
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

  section:nth-of-type(3) a:any-link > div:first-child {
    display: flex;
    width: 100%;
    max-width: 375px;
    aspect-ratio: 375/478.63;
    border-radius: 10px 10px 0 0;
    background-color: rgba(242, 246, 249, 0.06);
    box-shadow: 0 1px 4px -1px ${({ theme }) => theme.colors.black};
  }

  section:nth-of-type(3) a:any-link > div:first-child {
    display: flex;
    flex-grow: 1;
  }

  section:nth-of-type(3) a:any-link > div:nth-child(2) {
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
    box-shadow: 0 1px 20px -8px ${({ theme }) => theme.colors.black};
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

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 82px + 1px);
  }

  @media screen and (max-width: 1279px) {
    section:first-of-type {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 3.25rem;
      margin-bottom: 3.25rem;
    }

    section:first-of-type > div:last-child {
      max-width: 800px;
      height: auto;
      min-height: 601px;
    }

    section:nth-of-type(2) {
      margin-bottom: 3.25rem;
    }
  }

  @media screen and (max-width: 909px) {
    section:first-of-type > div:last-child {
      min-width: auto;
      min-height: auto;
      width: 87.912vw;
      height: auto;
      aspect-ratio: 800/601;
    }
  }

  @media screen and (max-width: 1536px) {
    h2,
    section:first-of-type,
    section:nth-of-type(2),
    section:nth-of-type(3) {
      max-width: 88vw;
    }
  }
`;
