import { StyledImageContainer } from "./AboutUsPageCardImageContainer.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AboutUsPageCardImageContainer = ({ memberImg, placeholderImg }) => {
  return (
    <StyledImageContainer $placeholderImg={placeholderImg}>
      <LazyLoadImage src={memberImg} alt="" effect="opacity" threshold={1650} />
    </StyledImageContainer>
  );
};

export default AboutUsPageCardImageContainer;
