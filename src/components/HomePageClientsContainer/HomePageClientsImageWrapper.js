import { StyledHomePageClientsImageWrapper } from "./HomePageClientsImageWrapper.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const HomePageClientsImageWrapper = ({
  img,
  placeholderImg,
  imgAspectRatio,
  imgMaxWidth,
}) => {
  return (
    <StyledHomePageClientsImageWrapper
      data-aos="zoom-in"
      $placeholderImg={placeholderImg}
      $imgAspectRatio={imgAspectRatio}
      $imgMaxWidth={imgMaxWidth}
    >
      <LazyLoadImage src={img} alt="" effect="opacity" threshold={800} />
    </StyledHomePageClientsImageWrapper>
  );
};

export default HomePageClientsImageWrapper;
