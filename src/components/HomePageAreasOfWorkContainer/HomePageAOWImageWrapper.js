import { StyledHomePageAOWImageWrapper } from "./HomePageAOWImageWrapper.styled";
import { HashLink } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const HomePageAOFImageWrapper = ({ id, img, placeholderImg }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate =
      el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const yOffset = 115;
    window.scrollTo({ top: yCoordinate - yOffset, behavior: "smooth" });
  };

  return (
    <StyledHomePageAOWImageWrapper $placeholderImg={placeholderImg}>
      <HashLink
        to={`/oblasti-rada#${id}`}
        scroll={(el) => scrollWithOffset(el)}
      >
        <LazyLoadImage src={img} alt="" effect="opacity" threshold={800} />
      </HashLink>
    </StyledHomePageAOWImageWrapper>
  );
};

export default HomePageAOFImageWrapper;
