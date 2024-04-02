import styled from "styled-components";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

export const StyledAboutUsPageCarouselAndTextContainer = styled.section`
  margin-bottom: 1.875rem;

  & > div {
    float: right;
    width: 100%;
    max-width: 570px;
    aspect-ratio: 570/429;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border: 3px solid ${({ theme }) => theme.colors.veryLightBlue};
    border-radius: 4px;
    background-image: url(${AboutUsPageData.SRB.imageCarouselPlaceholder});
    background-size: cover;
    margin-left: 4rem;
    margin-bottom: 3rem;
  }

  & > p {
    font-size: 1.275rem;
    font-weight: 400;
    line-height: 1.47059;
    white-space: pre-wrap;
  }

  & > div img {
    border-radius: 4px;
  }

  & .carousel.carousel-slider .control-arrow:hover {
    background-color: rgba(242, 246, 249, 0.2);
  }

  & .carousel.carousel-slider .control-dots {
    margin: 1.25rem 0;
  }

  @media screen and (max-width: 1365px) {
    & > div {
      margin-left: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    gap: 3.25rem;
    margin-bottom: 3.25rem;

    & > div {
      float: none;
      margin-left: 0;
      margin-bottom: 0;
      width: 100%;
      max-width: 800px;
    }

    & .carousel.carousel-slider .control-dots {
      margin: 1.7rem 0;
    }

    @media screen and (max-width: 767px) {
      & > p {
        font-size: 1.2rem;
      }

      & .carousel.carousel-slider .control-dots {
        margin: 1.1rem 0;
      }
    }
  }
`;
