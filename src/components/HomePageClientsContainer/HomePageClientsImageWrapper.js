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
      data-aos-once="false"
      $placeholderImg={placeholderImg}
      $imgAspectRatio={imgAspectRatio}
      $imgMaxWidth={imgMaxWidth}
    >
      <div>
        <LazyLoadImage src={img} alt="" effect="opacity" threshold={800} />
      </div>
    </StyledHomePageClientsImageWrapper>
  );
};

export default HomePageClientsImageWrapper;
