import { StyledAboutUsPageCarouselAndTextContainer } from "./AboutUsPageCarouselAndTextContainer.styled";
import ImageCarousel from "./ImageCarousel";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const AboutUsPageCarouselAndTextContainer = ({ language }) => {
  return (
    <StyledAboutUsPageCarouselAndTextContainer>
      <ImageCarousel />
      <p>{AboutUsPageData[`${language}`].pageText}</p>
    </StyledAboutUsPageCarouselAndTextContainer>
  );
};

export default AboutUsPageCarouselAndTextContainer;
