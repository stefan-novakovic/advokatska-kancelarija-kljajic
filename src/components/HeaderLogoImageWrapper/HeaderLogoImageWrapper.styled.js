import styled from "styled-components";

export const StyledHeaderLogoImageWrapper = styled.div`
  & > a,
  & > a > img {
    display: block;
    width: 67px;
    height: auto;
    border-radius: 50%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @media screen and (max-width: 1536px) {
    & > a,
    & > a > img {
      width: 60px;
    }
  }

  @media screen and (max-width: 1439px) {
    & > a,
    & > a > img {
      width: 55px;
    }
  }

  @media screen and (max-width: 1023px) {
    & > a,
    & > a > img {
      width: 50px;
    }
  }
`;
