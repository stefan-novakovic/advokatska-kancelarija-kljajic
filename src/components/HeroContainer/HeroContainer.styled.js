import styled from "styled-components";
import placeholderImg from "../../assets/images/home-hero-placeholder.jpg";

export const StyledHeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 96px + 1px);
  min-height: calc(568px - 96px + 1px);
  position: relative;
  background-color: transparent;
  background-image: url(${placeholderImg});
  background-position: top;
  background-size: cover;

  span {
    display: flex;
    flex-grow: 1;
  }

  span img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media screen and (max-width: 1023px) {
    height: calc(100vh - 82px + 1px);

    img {
      object-position: top 0 left 44%;
    }
  }

  @media screen and (max-width: 320px) and (max-height: 567px) {
    min-height: calc(480px - 96px + 1px);
  }
`;
