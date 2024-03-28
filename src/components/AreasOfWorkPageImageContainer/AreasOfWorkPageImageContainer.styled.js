import styled from "styled-components";

export const StyledImageContainer = styled.div`
  display: flex;
  background-image: url(${(props) => props.$placeholderImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  & > span,
  & > span > img {
    width: 60px;
    aspect-ratio: 60/63.33;
    /* visibility: hidden; */
  }

  @media screen and (max-width: 520px) {
    & > span,
    & > span > img {
      width: 45px;
    }
  }
`;
