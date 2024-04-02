import { StyledAboutUsPageCarouselAndTextContainer } from "./AboutUsPageCarouselAndTextContainer.styled";
import ImageCarousel from "./ImageCarousel";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const AboutUsPageCarouselAndTextContainer = ({ language }) => {
  return (
    <StyledAboutUsPageCarouselAndTextContainer
      data-aos="fade-left"
      id="carousel-and-text"
    >
      <ImageCarousel />
      <p>{AboutUsPageData[`${language}`].pageText}</p>
    </StyledAboutUsPageCarouselAndTextContainer>
  );
};

export default AboutUsPageCarouselAndTextContainer;
