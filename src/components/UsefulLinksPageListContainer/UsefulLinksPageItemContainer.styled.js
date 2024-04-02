import styled from "styled-components";

export const StyledUsefulLinksPageItemContainer = styled.div`
  & > li {
    margin-bottom: 2.425rem;
  }

  & > li:last-child {
    margin-bottom: 0;
  }

  & > li > a:any-link {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.45;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.veryLightBlue};
    white-space: wrap;
  }

  & > li > a:hover,
  & > li > a:focus-visible {
    text-decoration: underline;
    filter: brightness(85%);
  }

  & > li > a:active {
    filter: brightness(72%);
  }

  @media screen and (max-width: 767px) {
    & > li {
      margin-bottom: 1.55rem;
    }

    & > li > a:any-link {
      font-size: 1.25rem;
    }
  }
`;
