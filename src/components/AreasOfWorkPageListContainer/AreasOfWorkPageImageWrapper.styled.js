import styled from "styled-components";

export const StyledAreasOfWorkPageImageWrapper = styled.div`
  display: flex;
  background-image: url(${(props) => props.$placeholderImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  & > span,
  & > span > img {
    width: 60px;
    aspect-ratio: 60/63.33;
  }

  @media screen and (max-width: 767px) {
    & > span,
    & > span > img {
      width: 46px;
    }
  }
`;
