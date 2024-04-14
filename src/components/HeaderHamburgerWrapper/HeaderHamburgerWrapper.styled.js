import styled from "styled-components";

export const StyledHeaderHamburgerWrapper = styled.div`
  display: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;
