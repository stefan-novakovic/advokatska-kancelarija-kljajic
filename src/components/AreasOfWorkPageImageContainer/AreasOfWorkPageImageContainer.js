import { StyledImageContainer } from "./AreasOfWorkPageImageContainer.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AreasOfWorkPageImageContainer = ({ img, placeholderImg }) => {
  return (
    <StyledImageContainer $placeholderImg={placeholderImg}>
      <LazyLoadImage src={img} alt="" effect="opacity" threshold={800} />
    </StyledImageContainer>
  );
};

export default AreasOfWorkPageImageContainer;
