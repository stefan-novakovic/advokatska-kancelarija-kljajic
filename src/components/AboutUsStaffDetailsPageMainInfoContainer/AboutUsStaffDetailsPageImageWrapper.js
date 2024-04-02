import { StyledAboutUsStaffDetailsPageImageWrapper } from "./AboutUsStaffDetailsPageImageWrapper.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AboutUsStaffDetailsPageImageWrapper = ({ memberImg, placeholderImg }) => {
  return (
    <StyledAboutUsStaffDetailsPageImageWrapper
      data-aos="flip-right"
      $placeholderImg={placeholderImg}
    >
      <LazyLoadImage src={memberImg} alt="" effect="opacity" threshold={800} />
    </StyledAboutUsStaffDetailsPageImageWrapper>
  );
};

export default AboutUsStaffDetailsPageImageWrapper;
