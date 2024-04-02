import styled from "styled-components";

export const StyledAreasOfWorkPageImageWrapper = styled.div`
  display: flex;
  background-image: url(${(props) => props.$placeholderImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

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
