import styled from "styled-components";
import heroImg from "../../assets/images/home-hero-blurred.jpg";

export const StyledHeroContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 96px + 1px);
  background: url(${heroImg}), ${({ theme }) => theme.colors.veryLightBlue};
  background-size: cover;
  background-position: top;
  background-attachment: scroll;

  @media screen and (max-width: 1023px) {
    background-position: top 0 left 43%;
    min-height: calc(100vh - 82px + 1px);
  }
`;
