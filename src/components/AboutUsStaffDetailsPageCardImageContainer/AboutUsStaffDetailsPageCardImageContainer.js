import { StyledImageContainer } from "./AboutUsStaffDetailsPageCardImageContainer.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AboutUsStaffDetailsPageCardImageContainer = ({
  memberImg,
  placeholderImg,
}) => {
  return (
    <StyledImageContainer $placeholderImg={placeholderImg}>
      <LazyLoadImage src={memberImg} alt="" effect="opacity" threshold={800} />
    </StyledImageContainer>
  );
};

export default AboutUsStaffDetailsPageCardImageContainer;
