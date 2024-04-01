import { StyledAreasOfWorkPageImageWrapper } from "./AreasOfWorkPageImageWrapper.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AreasOfWorkPageImageWrapper = ({ img, placeholderImg }) => {
  return (
    <StyledAreasOfWorkPageImageWrapper $placeholderImg={placeholderImg}>
      <LazyLoadImage src={img} alt="" effect="opacity" threshold={800} />
    </StyledAreasOfWorkPageImageWrapper>
  );
};

export default AreasOfWorkPageImageWrapper;
