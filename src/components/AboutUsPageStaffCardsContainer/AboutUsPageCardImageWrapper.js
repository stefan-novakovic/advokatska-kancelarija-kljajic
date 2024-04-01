import { StyledAboutUsPageCardImageWrapper } from "./AboutUsPageCardImageWrapper.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AboutUsPageCardImageWrapper = ({ memberImg, placeholderImg }) => {
  return (
    <StyledAboutUsPageCardImageWrapper $placeholderImg={placeholderImg}>
      <LazyLoadImage src={memberImg} alt="" effect="opacity" threshold={1650} />
    </StyledAboutUsPageCardImageWrapper>
  );
};

export default AboutUsPageCardImageWrapper;
