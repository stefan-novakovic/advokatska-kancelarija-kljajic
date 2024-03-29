import { StyledHeroContainer } from "./HeroContainer.styled";
import heroImg from "../../assets/images/home-hero.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HeroTextContainer from "./HeroTextContainer";

const HeroContainer = () => {
  return (
    <StyledHeroContainer>
      <LazyLoadImage src={heroImg} alt="" effect="blur" threshold={1250} />
      <HeroTextContainer />
    </StyledHeroContainer>
  );
};

export default HeroContainer;
