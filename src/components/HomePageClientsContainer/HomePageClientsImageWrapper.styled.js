import styled from "styled-components";

export const StyledHomePageClientsImageWrapper = styled.div`
  display: grid;
  place-content: center;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &:first-child {
    order: 1;
  }
  &:nth-child(2) {
    order: 2;
  }
  &:nth-child(3) {
    order: 3;
  }
  &:nth-child(4) {
    order: 4;
  }
  &:last-child {
    order: 5;
  }

  & > div {
    width: 100%;
    max-width: ${(props) => props.$imgMaxWidth};
    aspect-ratio: ${(props) => props.$imgAspectRatio};
    background-image: url(${(props) => props.$placeholderImg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }

  & > div > span {
    display: flex !important;
  }

  @media screen and (max-width: 1100px) {
    &:first-child {
      order: 2;
    }
    &:nth-child(2) {
      order: 1;
    }
  }

  @media screen and (max-width: 612px) {
    &:first-child {
      order: 1;
    }
    &:nth-child(2) {
      order: 3;
    }
    &:nth-child(3) {
      order: 2;
    }
  }
`;
