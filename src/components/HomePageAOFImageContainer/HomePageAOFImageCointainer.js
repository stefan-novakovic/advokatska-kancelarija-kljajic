import { StyledImageContainer } from "./HomePageAOFImageContainer.styled";
import { HashLink } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const HomePageAOFImageCointainer = ({ id, img, placeholderImg }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate =
      el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const yOffset = 138;
    window.scrollTo({ top: yCoordinate - yOffset, behavior: "smooth" });
  };

  return (
    <StyledImageContainer $placeholderImg={placeholderImg}>
      <HashLink
        to={`/oblasti-rada#${id}`}
        scroll={(el) => scrollWithOffset(el)}
      >
        <LazyLoadImage src={img} alt="" effect="opacity" threshold={800} />
      </HashLink>
    </StyledImageContainer>
  );
};

export default HomePageAOFImageCointainer;
